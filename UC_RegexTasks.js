// Task1&2 => validate first name & the last name

class UserData{
    constructor(...params){
        this.fname = params[0];
        this.lname = params[1];
    }

    // get getName(){
    //     return this.name_f;
    // }

    // set setName(){

    // }

    validate(){
        //first name
        const regex_fname = /^([A-Z][a-zA-Z]{2,})$/;
        if (regex_fname.test(this.fname)) {
            console.log(`First name is in proper format`);
        }
        else{
            console.log(`First name is NOT in required format`);
        }

        //last name
        const regex_lname = /^([A-Z][a-zA-Z]{2,})$/;
        if (regex_lname.test(this.lname)) {
            console.log(`Last name is in proper format`);
        }
        else{
            console.log(`Last name is NOT in required format`);
        }



    }
}

var user = new UserData("Ganya", "majumdar");
user.validate();
