import { create, test, enforce, only } from "vest";
import { isEmail } from "validator";

enforce.extend({ isEmail });

export default create((data = {}, changedField) => {

  only(changedField);

  test("name", "What's your name?", () => {
    enforce(data.name).isNotBlank()
  })

  test("email", "What is your email?", () => {
    enforce(data.email).isNotBlank()
  });

  test("email", "Please enter a valid email address.", () => {
    enforce(data.email).isEmail()
  });


});
