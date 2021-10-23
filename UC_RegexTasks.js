// Task1, 2 , 3 & 4 => validate the name, email & mobile

class UserData{
    constructor(...params){
        this.fname = params[0];
        this.lname = params[1];
        this.mail = params[2];
        this.mobile = params[3];
        this.pass = params[4];
    }

    validate(){
        //first name
        const regex_fname = /^([A-Z][a-zA-Z]{2,})$/;
        if (regex_fname.test(this.fname)) {
            console.log(`\nFirst name is in proper format`);
        }
        else{
            console.log(`\nFirst name is NOT in required format`);
        }

        //last name
        const regex_lname = /^([A-Z][a-zA-Z]{2,})$/;
        if (regex_lname.test(this.lname)) {
            console.log(`\nLast name is in proper format`);
        }
        else{
            console.log(`\nLast name is NOT in required format`);
        }

        //email
        const regex_mail = /^([a-z]+[.][a-z]+[@][a-z]+[.][a-z]+([.a-z]+)$)$/;
        if (regex_mail.test(this.mail)) {
            console.log(`\nMail is in proper format`);
        }
        else{
            console.log(`\nMail is NOT in required format`);
        }

        //mobile
        const regex_mobile = /^([0-9]{2}[ ][1-9][0-9]{9})$/;
        if (regex_mobile.test(this.mobile)) {
            console.log(`\nMobile Number is in proper format`);
        }
        else{
            console.log(`\nMobile Number is NOT in required format`);
        }

        //password
        const regex_pass = /^(?=.*?[!@#$%^_+&*]{1})(?=.*?[A-Z]+)(?=.*?\d+).{8,}$/;
        if (regex_pass.test(this.pass)) {
            console.log(`\nPassword is in proper format`);
        }
        else{
            console.log(`\nPassword is NOT in required format`);
        }
    }
}

var user = new UserData("Ganya", "majumdar", "aditya.uphade@gmail.com.in", "91 9898989898", "AA_bb123" );
user.validate();
