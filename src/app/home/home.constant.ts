export const HOME_TABLE_CONFIG ={
  title: 'Home table',
  tableHeaders: [
    {
      label: 'Name',
      value: 'name',
      type: 'text'
    },
    {
      label: 'Email Id',
      value: 'email_id',
      type: 'text'
    },
    {
      label: 'Contact Info',
      value: 'contact_no',
      type: 'text'
    },
    {
      label: 'Address',
      value: 'address',
      type: 'text'
    },
    {
      label: 'Action',
      type: 'button',
      icons: [
        {
          name: 'Edit',
          id: 'edit'
        },
        {
          name: 'Delete',
          id: 'delete'
        }
      ]
    }
  ]
}
export const TABLE_DATA = [
  { name: 'Ankit', email_id: 'ankit@gmail.com', contact_no: '1234567890', address: 'Meerut'},
  { name: 'Manish', email_id: 'manish@gmail.com', contact_no: '9874567890', address: 'Delhi'},
  { name: 'Rahul', email_id: 'rahul@gmail.com', contact_no: '4564567890', address: 'Gurgaon'},
  { name: 'Mohit', email_id: 'mohit@gmail.com', contact_no: '6784567890', address: 'Pune'},
  { name: 'Rakesh', email_id: 'rakesh@gmail.com', contact_no: '8904567890', address: 'Mumbai'},
]
