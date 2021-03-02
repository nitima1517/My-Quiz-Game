class Question {
    constructor() {
      this.title = createElement;
       this.input1 = createInput;
       //this.input2 = createInput;
      // this.button = createButton;
       this.question = createElement;
       this.option1 = createElement;
       this.option2=createElement;
       this.option3=createElement;
       this.option4=createElement;
    }

    hide(){
        this.title.hide();
        this.question .hide();
       this.option1 .hide();
       this.option2.hide();
       this.option3.hide();
       this.option4.hide();
    }

    disply(){
    this.title.html("MYQUIZ Game");
    this.title.position(350,0);

    this.question.html("Question: What starts with  the letter 'E' , but has only one letter?")
    this.question.position(150,80);
    this.option1.html("1:Everyone")
    this.option.position(150,100);
    this.opstion2.html("2: Envelope")
    this.option2.position(150,120);
    this.option3.html("3: Estimate");
    this.option3.position(150,140);
    this.option4.html("4:Example");
    this.option4.position(150,160);

    this.input1.position(150,230);
}
}