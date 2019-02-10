export class Annotation{
    _id: string;
    iduser: string;
    idcourse: string;
    idtopic: string;
    type: string;
    description: string;
    context: string;
    stars: number;
    answers: [{  
        iduser:string, 
        description:string,
        datetimecreated: number
    }];
    showanswers: boolean;
}