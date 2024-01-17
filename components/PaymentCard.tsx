import React, { useState, useRef } from 'react'
import PaymentCardInput from './PaymentCardInput';
import newbg from "@/assets/new-BG.svg";

const PaymentCard = ({ setIsCreditCardShow }: any) => {


  const [expiryDate, setExpiryDate] = useState("");
  const [dateError, setDateError] = useState("")
  const [monthError, setMonthError] = useState("")
  const [cvvCode, setCvvCode] = useState("")
  const [cvvError, setCvvError] = useState("")
  const [cardHolderName, setCardHolderName] = useState("")
  const [FormError, setFormError] = useState("")
  const [cardNumber, setCardNumber] = useState()
  const [cardError, setCardError] = useState("")

  const changeHandler = () => {

  }

  const currentYear = new Date().getFullYear();

  const handleExpiryDate = (event: any) => {
    const inputValue = event.target.value.replace(/\D/g, '').slice(0, 6);
    setFormError("")
    let formattedDate = inputValue;

    if (inputValue.length >= 2) {
      const month = inputValue.slice(0, 2);
      const year = inputValue.slice(2, 6);
      const numericMonth = parseInt(month);
      const numericYear = parseInt(year);


      if (numericMonth < 1 || numericMonth > 12) {
        setMonthError("Invalid Month");
      }
      else {
        setMonthError("")
      }
      if (numericYear < currentYear && inputValue.length == 6) {
        setDateError("Invalid Year");
      }
      else {
        setDateError("")
      }

      formattedDate = (numericMonth < 10 ? '0' : '') + numericMonth;

      formattedDate += inputValue.length === 2 ? '/' : '/' + inputValue.slice(2);
    }

    setExpiryDate(formattedDate);
  };

  const cvvHandler = (event: any) => {
    let value = event.target.value;
    setFormError("")
    setCvvCode(value);
    const onlyNumberRegex = /^[0-9]*$/;

    if (!onlyNumberRegex.test(value) || value.length > 4) {
      setCvvError("Please Enter In Digit");
    } else {
      setCvvError("");
    }
  };


  const cardHolderChange = (e: any) => {
    setCardHolderName(e.target.value)
    setFormError("")


  }


  const cardNumberChange = (e: any) => {
    setCardNumber(e.target.value)
    setFormError("")
    const onlyNumberRegex = /^[0-9]*$/;

    if (!onlyNumberRegex.test(e.target.value) || e.target.value.length > 16) {
      setCardError("Please Enter Valid Card Number");
    } else {
      setCardError("");
    }
  }



  const handleBackspace = (e: any) => {
    if (e.target.value.length == 3 && e.key === "Backspace") {
      setExpiryDate((prevDate) => prevDate.slice(0, -1));
      setMonthError("")
      setDateError("")
    }
  };


  const submitHandler = () => {
    if (expiryDate == "" || cvvCode == "" || cardHolderName == "" || cardNumber == "" || dateError !== "" || monthError !== "" || cardError !== "") {
      setFormError("Please Fill The Form Correctly")
    }
    else {
      setIsCreditCardShow(true)
      setFormError("")
    }
  }

  return (
    <div className='mx-4 md:mx-8 lg:mx-16 '>
      <div className="container mx-auto bg-cover no-repeat pb-28 " style={{ backgroundImage: `url(${newbg.src})` }}>

        <div className="flex flex-col lg:flex-row justify-center">
          <div className="lg:w-3/5 bg-white flex flex-col lg:flex-row justify-center items-center lg:items-stretch rounded-xl">
            <div className="w-full lg:w-3/4 text-left px-10 lg:px-0">
              <div className="text-3xl font-bold my-10 text-center mt-16">Add Payment Card</div>
              <PaymentCardInput text={"Card Holder Name"} type={"text"} vlue={cardHolderName} name={"payment"} placeholder={"New Payment Cards"} onChange={cardHolderChange} />

              <PaymentCardInput text={"Card Number"} type={"text"} name={"cardNumber"} placeholder={"4855 3489 1209 5601"} value={cardNumber} onChange={cardNumberChange} />
              <div className="text-red-600 text-[16px] px-2">{cardError}</div>
              <div className='w-full sm:flex justify-between'>
                <div className='w-full sm:w-[45%]'>
                  <div><PaymentCardInput text={"Expiry Date"} type={"text"} name={"expiry"} placeholder={"MM / YY"} value={expiryDate} onChange={handleExpiryDate} onKeyDown={handleBackspace} /></div>
                  {(dateError || monthError) && <div className="text-red-600 text-[16px] px-2">{dateError}{monthError}</div>}
                </div>
                <div className='w-full sm:w-[45%] '>
                  <PaymentCardInput text={"CVC"} type={"text"} name={"cvc"} value={cvvCode} placeholder={"Security Code"} onChange={cvvHandler} />
                  <div className="text-red-600 text-[16px] px-2">{cvvError}</div>
                </div>
              </div>



              <div className='w-full' onClick={submitHandler}>
                <div className='rounded-lg border bg-[#FFC700] py-4 cursor-pointer my-8 '>
                  <div className='text-center font-lg text-Black font-bold '>Done</div>
                </div>
              </div>

              <div className="flex items-center space-x-2 mb-4">
                <input
                  type="checkbox"
                  className="w-4 h-4 accent-pink-300 md:w-6 md:h-6 md:accent-[#FFC700]"
                />
                <label htmlFor="exampleCheckbox" className="text-black flex items-center mt-1">Save Card</label>
              </div>
              <div className="text-red-600 text-[16px] px-2 mb-14 text-center h-[10px]">{FormError}</div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentCard