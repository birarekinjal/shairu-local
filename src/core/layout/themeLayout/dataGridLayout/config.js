import { Select, Tag } from "antd";

export const CabinColumns = [
  {
    title: 'Cabin Name',
    dataIndex: 'cabin_name',
    key: 'cabin_name',
    width: 150,
    editable: true,
  },
  {
    title: 'Status',
    dataIndex: 'is_active',
    key: 'is_active',
    width: 150,
    editable: true,
    formEditValue: '',
    render: (tags) => (
      <Tag>{tags ? 'Active' : 'InActive'}</Tag>
    ),
    valueOptions: ['Active', 'In Active'],
  },
];

export const nameColumns = [
  {
    title: 'Cabin Name',
    dataIndex: 'cabin_name',
    key: 'cabin_name',
    width: 150,
    editable: true,
    valueDisplay: 'tag',
    formEditValue: '',
    tagProps: {

      color: 'red',
    },
    renderValueModify: false,
    addRowDefaultValue: 'Kinjal',
    addRowType: 'text',
    apiFunction: '',
    editableType: 'text',
    editableProps: {
      inputProps: {
        editableDefaultValue: '',
        validation: [],
      }
    }
  }

];

export const companyColumns = [
  {
    title: 'Company Name',
    dataIndex: 'company_name',
    key: 'company_name',
    width: 150,
    editable: true,
    valueDisplay: 'text',
    formEditValue: '',
    renderValueModify: false,
    addRowDefaultValue: '',
    addRowType: 'text',
    apiFunction: '',
    editableType: 'text',
    editableProps: {
      inputProps: {
        editableDefaultValue: '',
        validation: [],
      }
    }
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    width: 150,
    editable: true,
    valueDisplay: 'text',
    formEditValue: '',
    renderValueModify: false,
    addRowDefaultValue: '',
    addRowType: 'text',
    apiFunction: '',
    editableType: 'text',
    editableProps: {
      inputProps: {
        editableDefaultValue: '',
        validation: [],
      }
    }
  },
  {
    title: 'Fax Number',
    dataIndex: 'fax_number',
    key: 'fax_number',
    width: 150,
    editable: true,
    valueDisplay: 'text',
    formEditValue: '',
    renderValueModify: false,
    addRowDefaultValue: '',
    addRowType: 'number',
    apiFunction: '',
    editableType: 'number',
    editableProps: {
      inputProps: {
        editableDefaultValue: '',
        validation: [],
      }
    }
  },
  {
    title: 'Mobile Number',
    dataIndex: 'mobile_number',
    key: 'mobile_number',
    width: 150,
    editable: true,
    valueDisplay: 'text',
    formEditValue: '',
    renderValueModify: false,
    addRowDefaultValue: '',
    addRowType: 'number',
    apiFunction: '',
    editableType: 'number',
    editableProps: {
      inputProps: {
        editableDefaultValue: '',
        validation: [],
      }
    }
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    width: 150,
    editable: true,
    valueDisplay: 'text',
    formEditValue: '',
    renderValueModify: false,
    addRowDefaultValue: '',
    addRowType: 'textArea',
    apiFunction: '',
    editableType: 'textArea',
    editableProps: {
      inputProps: {
        editableDefaultValue: '',
        validation: [],
      }
    }
  },

  {
    title: 'Country',
    dataIndex: 'country',
    key: 'country',
    width: 150,
    editable: true,
    valueDisplay: 'text',
    valueKeyDisplay: 'name',
    formEditValue: '',
    renderValueModify: false,
    addRowDefaultValue: '',
    addRowType: 'AsyncSelect',
    apiFunction: '/company/country/',
    editableType: 'AsyncSelect',
    editableProps: {
      inputProps: {
        editableDefaultValue: '',
        validation: [],
      }
    }
  },

  {
    title: 'State',
    dataIndex: 'state',
    key: 'state',
    width: 150,
    editable: true,
    valueDisplay: 'text',
    valueKeyDisplay: 'name',
    formEditValue: '',
    renderValueModify: false,
    addRowDefaultValue: '',
    apiFunction: '/company/state/',
    addRowType: 'AsyncSelect',
    editableType: 'AsyncSelect',
    editableProps: {
      inputProps: {
        editableDefaultValue: '',
        validation: [],
      }
    }
  },

  {
    title: 'City',
    dataIndex: 'city',
    key: 'city',
    width: 150,
    editable: true,
    valueDisplay: 'text',
    valueKeyDisplay: 'name',
    formEditValue: '',
    renderValueModify: false,
    addRowDefaultValue: '',
    addRowType: 'AsyncSelect',
    apiFunction: '/company/city/',
    editableType: 'AsyncSelect',
    editableProps: {
      inputProps: {
        editableDefaultValue: '',
        validation: [],
      }
    }
  },

  // {
  //   title: 'Status',
  //   dataIndex: 'is_active',
  //   key: 'city',
  //   width: 150,
  //   editable: true,
  //   valueDisplay: 'text',
  //   formEditValue: '',
  //   renderValueModify: false,
  //   addRowDefaultValue: '',
  //   addRowType: 'AsyncSelect',
  //   apiFunction: '',
  //   editableType: 'AsyncSelect',
  //   editableProps: {
  //     inputProps: {
  //       editableDefaultValue: '',
  //       validation: [],
  //     }
  //   }
  // },
];


export const companyColumns1 = [
  {
    title: 'Company Name',
    dataIndex: 'company_name',
    key: 'company_name',
    width: 150,
    editable: true,
    valueDisplay: 'text',
    formEditValue: '',
    renderValueModify: false,
    addRowDefaultValue: '',
    addRowType: 'text',
    apiFunction: '',
    editableType: 'text',
    editableProps: {
      inputProps: {
        editableDefaultValue: '',
        validation: [],
      }
    }
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    width: 150,
    editable: true,
    valueDisplay: 'text',
    formEditValue: '',
    renderValueModify: false,
    addRowDefaultValue: '',
    addRowType: 'text',
    apiFunction: '',
    editableType: 'text',
    editableProps: {
      inputProps: {
        editableDefaultValue: '',
        validation: [],
      }
    }
  },
  {
    title: 'Fax Number',
    dataIndex: 'fax_number',
    key: 'fax_number',
    width: 150,
    editable: true,
    valueDisplay: 'text',
    formEditValue: '',
    renderValueModify: false,
    addRowDefaultValue: '',
    addRowType: 'number',
    apiFunction: '',
    editableType: 'number',
    editableProps: {
      inputProps: {
        editableDefaultValue: '',
        validation: [],
      }
    }
  },
  {
    title: 'Mobile Number',
    dataIndex: 'mobile_number',
    key: 'mobile_number',
    width: 150,
    editable: true,
    valueDisplay: 'text',
    formEditValue: '',
    renderValueModify: false,
    addRowDefaultValue: '',
    addRowType: 'number',
    apiFunction: '',
    editableType: 'number',
    editableProps: {
      inputProps: {
        editableDefaultValue: '',
        validation: [],
      }
    }
  },



  // {
  //   title: 'Status',
  //   dataIndex: 'is_active',
  //   key: 'city',
  //   width: 150,
  //   editable: true,
  //   valueDisplay: 'text',
  //   formEditValue: '',
  //   renderValueModify: false,
  //   addRowDefaultValue: '',
  //   addRowType: 'AsyncSelect',
  //   apiFunction: '',
  //   editableType: 'AsyncSelect',
  //   editableProps: {
  //     inputProps: {
  //       editableDefaultValue: '',
  //       validation: [],
  //     }
  //   }
  // },
];