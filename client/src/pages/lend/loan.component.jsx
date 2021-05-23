import * as React from "react";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Error } from "@progress/kendo-react-labels";
import { Input} from "@progress/kendo-react-inputs";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import {Label} from "@progress/kendo-react-labels"; 
import './loan.styles.scss'; 

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

// const sports = [
//   "Pay with $USD",
//   "Pay with Bank Transfer",
//   "Pay with Mvisa-QR",
//   "Pay with Barter",
//   "Pay in 14days with Migo",
//   "Pay with PayAttitude",
// ];

const bankruptcy = [
  "I have not filed for bankruptcy",
  "I have filed for bankruptcy but it has been dismissed or discharged"
]

const criminal = [
  "Yes, I have a criminal conviction within the last 5 years",
]

const loan = [
  "$100",
  "$1,000",
  "$5,000",
  "$10,000"

]

const Loan = () => {
  const handleSubmit = (dataItem) => alert(JSON.stringify(dataItem, null, 2));
  return (
    <div className='loan'>
      <h1>microLend Application</h1>
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
            <div className="mb-3 email">
              <Field
                name={"email"}
                type={"email"}
                component={EmailInput}
                label={"Email"}
                validator={emailValidator}
              />
            </div>
            <div className="mb-3">
              <Label>Have you ever filed for bankruptcy?</Label>
              <DropDownList
                  data={bankruptcy}
                  defaultItem="I have filed for bankruptcy"
                />
                <p>microLend cannot lend to individuals who are currently in bankruptcy</p>
            </div>
            <div className="mb-3">
              <Label>Do you have a criminal conviction?</Label>
              <DropDownList
                  data={criminal}
                  defaultItem="No, I don't  have a previous criminal conviction"
                />
                <p>microLend cannot lend to individuals with a criminal conviction</p>
            </div>
            {/* <div style={{ marginTop: "20px" }}>
              <DropDownList
                data={sports}
                defaultItem="Pay with Crytocurrency"
              />
            </div> */}
          </fieldset>
          <fieldset className={"k-form-fieldset"}>
            <legend className={"k-form-legend"}>
              Loan information
            </legend>
            <div className="mb-3">
              <Label>How Much Would you like to borrow?</Label>
              <DropDownList
                  data={loan}
                  defaultItem="$25"
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
    </div> 
  );
};

export default Loan;
