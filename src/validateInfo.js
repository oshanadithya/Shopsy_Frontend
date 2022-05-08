export default function validateInfo(values){
    let errors = {}

    if(!values.customerName.trim()){
        errors.customerName = "Customer Name required"
    }

    //email

    if(!values.emailAddress){
        errors.emailAddress = "Email required"
    }else if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(values.emailAddress)){
        errors.emailAddress = "Email address is invalid"
    }

    return errors;
}