import './lender.styles.scss'; 
import card3 from '../../assets/card3.jpeg'; 
import Cards from '../../components/cards/cards.component';
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import {Label} from "@progress/kendo-react-labels"; 
import { Input} from "@progress/kendo-react-inputs";


const Lender = () => {
    const loan = [
        "$50",
        "$100",
        "$500",
        "$1000"
    ]
    const pay = [
        "Pay with $USD",
        "Pay with Bank Transfer",
        "Pay with Mvisa-QR",
        "Pay with Barter",
        "Pay in 14days with Migo",
        "Pay with PayAttitude",
    ];
    return (
        <div className='lender'> 
            <div className='content'>
                <img src={card3}></img>
                <p>
                    Mandingu
                </p>
            </div>
            <DropDownList 
            className='dropdown'
                data={loan}
                defaultItem="$25"
            />
            
            <div className='payment'>
            <Form
                render={(formRenderProps) => (
                    <div className='form-lender'> 
                        <fieldset>
                            <legend>Pay with card</legend>
                            <FormElement>
                            <Label>Card Number</Label>
                            <Field name={"cardNumber"} component={Input}/>
                            <p>Please fill out a card number</p>
                            <Label>Expiration Date</Label>
                            <Field name={"expDate"} component={Input}/>
                            <Label>CVV</Label>
                            <Field name={"cvv"} component={Input}/>
                            <Label>Postal Code</Label>
                            <Field name={"postalCode"} component={Input}/>
                            </FormElement>
                            <p>Choose another way to pay</p>
                            <DropDownList
                                data={pay}
                                defaultItem="Pay with Cryto"
                            />
                            <p>Total: $25</p>
                            <button>Pay</button>
                        </fieldset>
                    </div>
                )}
            />
            </div>
        </div>
    )
}

export default Lender; 