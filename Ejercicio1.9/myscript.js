const topics = ['JavaScript', 'Variables', 'funciones', 'condicionales', 'bucles'];

const MAYINVERSATopics = topics.map(INICIALTopic => INICIALTopic.toUpperCase());
MAYINVERSATopics.reverse();
console.log('topics', topics);
console.log('En mayusculas e inversa', MAYINVERSATopics);