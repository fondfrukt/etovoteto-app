const t = {
    design:{
        type:'design',
        title:"Затея",
        text: "Затея — план создания объектов или организации событий"
    },
    project:{
        type:'project',
        title:'Проект'
    },
    object:{
        type:'object',
        title:'Объект'
    },
    event:{
        type:'event',
        title:"Событие",
        text: "Событие — ограниченная по времени совместная деятельность или информация о ней, подтвержденная участниками."
    },
    author: {
      type:'author',
      title:"Автор",
      text: "Автор — первый опубликовавший затею или проект."
    },
    thing:{
        type:'thing',
        title:"Штука",
        text: "Штука — материальная сушность"
    },
    persona:{
        type:'persona',
        title:'Личность'
    },
    face:{
        type:'face',
        title:'Лицо'
    },
    host:{
        type:'host',
        title:'Ведущий'
    },
    donation:{
        type:'donation',
        title:'Дар'
    },
    skill:{
        type:'skill',
        title:'Навык'
    },
    task:{
        type:'task',
        title:'Задача'
    },
    demand:{
        type:'demand',
        title:'Поставка'
    },
    idea:{
        type:'idea',
        title:'Идея'
    },
    intent:{
        type:'intent',
        title:'Цель'
    },
    gist:{
        type:'gist',
        title:'Суть'
    },
    place:{
        type:'place',
        title:'Место'
    },
    time:{
        type:'time',
        title:'Время'
    },
    feature:{
        type:'feature',
        title:'Возможность'
    },
    tool:{
        type:'tool',
        title:'Инструмент'
    },
    material:{
        type:'material',
        title:'Материал'
    },
    result:{
        type:'result',
        title:'Результат'
    },
    present:{
        type:'present',
        title:'Подарок'
    },
    question:{
        type:'question',
        title:'Вопрос'
    },
    statement:{
        type:'statement',
        title:'Утверждение'
    },
    quality:{
        type:'quality',
        title:'Качество'
    },
    quantity:{
        type:'quantity',
        title:'Количество'
    }
};


t.publicFeed={
    canHave: [
      t.design
    ]
};
t.personal={
    canHave: [
        t.persona,
        t.face,
        t.host
    ]
};
t.persona.canHave=[
    t.donation,
    t.place,
    t.question,
    t.time,
    t.statement
];
t.host.canHave=[
    t.donation,
    t.present,
    t.skill,
    t.place,
    t.time,
    t.result,
    t.tool,
    t.material,
    t.question,
    t.statement
];
t.face.canHave=[
    t.donation,
    t.skill,
    t.result,
    t.place,
    t.time,
    t.tool,
    t.material,
    t.question,
    t.statement
];
t.statement.canHave=[
    t.question,
    t.statement
];
t.material.canHave=[
    t.place,
    t.quality,
    t.quantity,
    t.question,
    t.statement
];
t.feature.canHave=[
    t.time,
    t.place,
    t.quality,
    t.quantity,
    t.question,
    t.result,
    t.statement
];
t.skill.canHave=[
    t.tool,
    t.material,
    t.question,
    t.statement
];
t.result.canHave=[
    t.place,
    t.quality,
    t.quantity,
    t.question,
    t.statement
];
t.tool.canHave=[
    t.skill,
    t.place,
    t.quality,
    t.quantity,
    t.question,
    t.statement
];
t.time.canHave=[
    t.statement,
    t.question
];
t.place.canHave=[
    t.statement,
    t.question

];
t.task.canHave = [
    t.skill,
    t.tool,
    t.material,
    t.place,
    t.time,
    t.question,
    t.statement,
    t.result,
    t.face
];
t.demand.canHave = [
    t.tool,
    t.material,
    t.place,
    t.time,
    t.question,
    t.statement,
    t.result,
    t.face
];
t.donation.canHave=[
    t.quality,
    t.quantity,
    t.question,
    t.statement
];
t.present.canHave=[
    t.quality,
    t.quantity,
    t.question,
    t.result,
    t.statement
];
t.idea.canHave=[
    t.statement,
    t.question
];
t.intent.canHave=[
    t.statement,
    t.question
];
t.gist.canHave=[
    t.statement,
    t.question
];
t.design.canHave = [
    t.project,
    t.event,
    t.object,
    t.idea,
    t.intent,
    t.gist,
    t.feature,
    t.donation,
    t.present,
    t.host,
    t.author
];
t.project.canHave = [
    t.object,
    t.event,
    t.idea,
    t.intent,
    t.gist,
    t.feature,
    t.donation,
    t.present,
    t.host
];
t.object.canHave = [
    t.gist,
    t.place,
    t.time,
    t.tool,
    t.material,
    t.task,
    t.demand,
    t.result,
    t.feature,
    t.donation,
    t.present,
    t.host,
    t.idea,
    t.intent,
    t.author
];
t.event.canHave = [
    t.gist,
    t.place,
    t.time,
    t.tool,
    t.material,
    t.task,
    t.demand,
    t.result,
    t.feature,
    t.donation,
    t.present,
    t.host,
    t.idea,
    t.intent,
    t.author
];
t.statement.canHave = [
    t.statement,
    t.question
];
t.author.canHave = [
    t.statement,
    t.question
];
t.question.canHave = [
    t.statement
];

export default types;