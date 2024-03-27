import React from "react";
import classnames from 'classnames';
//npm install classnames
import { Wallet } from "@mercadopago/sdk-react";
import { Context } from "../Service/ContextProvider";
import InputCSS from '../css/Inputs.module.css';
import numeral from 'numeral';

const Payment = () => {
  
  const { preferenceId } = React.useContext(Context);
  const [isReady, setIsReady] = React.useState(false);
  const paymentClass = classnames('', {
    'payment-form--hidden': !isReady,
  });
  const compra = sessionStorage.getItem("compra");
  const orderData = compra ? JSON.parse(compra) : { quantity: "1", price: "0", amount: 0, description: "Terreno",cards: 0, storage:1, guarderia:0, sum:0, user: {} };
  ;

  const handleOnReady = () => {
    setIsReady(true);
  }

  const renderCheckoutButton = () => {
    if (!preferenceId) return null;


 
 

    return (
      <Wallet 
        initialization={{ preferenceId: preferenceId, redirectMode: 'blank'}}
        customization = {
          {
          visual: {
            buttonBackground: 'black',
            borderRadius: '16px',
          },
          texts: {
            action: 'pay',
            valueProp: 'security_safety'
          }
        }
      }
        onReady={handleOnReady} 
        
        />
    );
  }

  return (
    <div className={paymentClass}>
      <div className={InputCSS.containerWallet}>
 
        <div className={InputCSS["form-payment"]}>
   
          <div className={InputCSS["payment-details"]}>
            <div className={`${InputCSS["form-group"]} ${InputCSS["col-sm-12"]}`}>
              {renderCheckoutButton()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
