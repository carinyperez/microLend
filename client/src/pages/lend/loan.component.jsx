import * as React from "react";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Error } from "@progress/kendo-react-labels";
import { Input } from "@progress/kendo-react-inputs";
import { DropDownList } from "@progress/kendo-react-dropdowns";

const emailRegex = new RegExp(/\S+@\S+\.\S+/);
const emailValidator = (value) =>
  emailRegex.test(value) ? "" : "Please enter a valid email.";
const EmailInput = (fieldRenderProps) => {
  const { validationMessage, visited, ...others } = fieldRenderProps;
  return (
    <div>
      <Input {...others} />
      {visited && validationMessage && <Error>{validationMessage}</Error>}
    </div>
  );
};

const sports = [
  "Pay with $USD",
  "Pay with Bank Transfer",
  "Pay with Mvisa-QR",
  "Pay with Barter",
  "Pay in 14days with Migo",
  "Pay with PayAttitude",
];
const App = () => {
  const handleSubmit = (dataItem) => alert(JSON.stringify(dataItem, null, 2));
  return (
    <Form
      onSubmit={handleSubmit}
      render={(formRenderProps) => (
        <FormElement style={{ maxWidth: 650 }}>
          <fieldset className={"k-form-fieldset"}>
            <legend className={"k-form-legend"}>
              Please fill in the fields:
            </legend>
            <div className="mb-3">
              <Field
                name={"firstName"}
                component={Input}
                label={"First name"}
              />
            </div>

            <div className="mb-3">
              <Field name={"lastName"} component={Input} label={"Last name"} />
            </div>
            <div className="mb-3">
              <Field
                name={"Date of Birth"}
                component={Input}
                label={"Date of Birth"}
              />
            </div>
            <div className="mb-3">
              <Field
                name={"Mobile Number"}
                component={Input}
                label={"Mobile Number"}
              />
            </div>

            <div className="mb-3">
              <Field
                name={"email"}
                type={"email"}
                component={EmailInput}
                label={"Email"}
                validator={emailValidator}
              />
            </div>
            <div style={{ marginTop: "20px" }}>
              <DropDownList
                data={sports}
                defaultItem="Pay with Crytocurrency"
              />
            </div>
          </fieldset>
          <div className="k-form-buttons">
            <button
              type={"submit"}
              className="k-button"
              disabled={!formRenderProps.allowSubmit}
            >
              Submit
            </button>
          </div>
        </FormElement>
      )}
    />
  );
};

export default App;
