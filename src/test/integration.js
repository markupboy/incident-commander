import { Selector } from "testcafe";

fixture(`Getting Started`).page(`http://localhost:3000`);

const updateDescription = async function(t, description) {
  return t.typeText("#formDescription", description);
};

const updateStatus = async function(t, status) {
  const statusSelect = Selector("#formStatus");
  const statusOption = statusSelect.find("option");
  return t.click(statusSelect).click(statusOption.withText(status));
};

const updateUpdate = async function(t, update) {
  return t.typeText("#formUpdate", update);
};

const submitUpdate = async function(t) {
  const submitButton = Selector("button[type=submit]").withText("Submit");
  return t.click(submitButton);
};

const addUpdate = async function(t, { description, status, update }) {
  if (description) updateDescription(t, description);
  if (status) updateStatus(t, status);
  if (update) updateUpdate(t, update);
  submitUpdate(t);
};

test("Add an initial status", async t => {
  const incident = {
    description: "This is a test incident",
    status: "Investigating",
    update: "First update"
  };

  await addUpdate(t, incident);

  const formattedUpdate = Selector("textarea").value;

  await t
    // update format contains entered text
    .expect(formattedUpdate)
    .contains(incident.description)
    .expect(formattedUpdate)
    .contains(incident.status)
    .expect(formattedUpdate)
    .contains(incident.update)

    // update is blanked for easier filling
    .expect(Selector("#formUpdate").value)
    .eql("");

  const update = { update: "Second update" };
  await addUpdate(t, update);

  await t
    // update format contains new update
    .expect(formattedUpdate)
    .contains(incident.description)
    .expect(formattedUpdate)
    .contains(incident.status)
    .expect(formattedUpdate)
    .notContains(incident.update)
    .expect(formattedUpdate)
    .contains(update.update);
});
