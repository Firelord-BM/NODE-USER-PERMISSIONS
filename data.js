const ROLE = {
  ADMIN: "admin",
  BASIC: "basic",
};

module.exports = {
  ROLE: ROLE,
  users: [
    { id: 1, name: "Mark", role: ROLE.ADMIN },
    { id: 2, name: "John", role: ROLE.BASIC },
    { id: 3, name: "Luke", role: ROLE.BASIC },
  ],
  projects:[
    {id:1,name:"Project Mark",userId:1},
    {id:2,name:"Project John",userId:2},
    {id:3,name:"Project Luke", userId:3}
  ]
};
