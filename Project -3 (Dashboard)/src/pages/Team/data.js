export const rows = [
  { id: 1, name: 'Ahmed Youssef', email: 'ahmed.youssef@gmail.com', age: 24, phone: '01093284756', access: "Admin"},
  { id: 2, name: 'Sara Ali', email: 'sara.ali@hotmail.com', age: 22, phone: '01157392014', access: "Admin" },
  { id: 3, name: 'Omar Khaled', email: 'omar.khaled@yahoo.com', age: 26, phone: '01267849302', access: "Admin" },
  { id: 4, name: 'Mona Ibrahim', email: 'mona.ibrahim@gmail.com', age: 21, phone: '01028473911', access: "Manager"},
  { id: 5, name: 'Mahmoud Tarek', email: 'mahmoud.tarek@outlook.com', age: 25, phone: '01192837465', access: "Manager" },
  { id: 6, name: 'Nour Hassan', email: 'nour.hassan@gmail.com', age: 23, phone: '01254673829', access: "Manager" },
  { id: 7, name: 'Khaled Samir', email: 'khaled.samir@yahoo.com', age: 27, phone: '01017384926', access: "User" },
  { id: 8, name: 'Reem Adel', email: 'reem.adel@hotmail.com', age: 22, phone: '01164739285', access: "User" },
];


export const columns = [
  { field: 'id', headerName: 'ID', width:50, align:"Center", headerAlign: "center" },
  { field: 'name', headerName: 'Name',flex:1, align:"Center", headerAlign: "center"},
  { field: 'email', headerName: 'Email', flex:1, align:"Center", headerAlign: "center" },
  { field: 'age', headerName: 'Age', align:"Center", headerAlign: "center"},
  { field: 'phone', headerName: 'Phone', flex:1, align:"Center", headerAlign: "center" },
  { field: 'access', headerName: 'Access', flex:1, align:"Center", headerAlign: "center"  },
];