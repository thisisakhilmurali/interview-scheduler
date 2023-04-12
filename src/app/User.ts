export class User {

    name:string;
    email:string;
    phnumber:string;
    skills:string;
    experience:string;
    date:string;
    time:string;
    link:string;
    poc:string;

    constructor (name:string, email:string, phnumber:string, skills:string, experience:string, date:string, time:string, link:string, poc:string) {
        this.name = name;
        this.email = email;
        this.phnumber = phnumber;
        this.skills = skills;
        this.experience = experience;
        this.date = date;
        this.time = time;
        this.link = link;
        this.poc = poc;
    }
    
}