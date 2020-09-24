export default {
  route: '/project/template/form/edit',
  title: '编辑人物',
  local: {},
  remote: {
    $$HtForm: {
      url: '/mock/api/update',
      params: {
        id: '<%:= location.query.id %>',
      },
    },
  },
  elementConfig: {
    type: 'HtGuiContainer',
    props: {},
    children: [
      {
        type: 'HtForm',
        props: {
          isCard: true,
          url: '/mock/api/update',
          fields: [
            {
              field: 'name',
              title: '姓名',
              disabled: false,
              tooltip: '',
              required: false,
              placeholder: '',
              type: 'Input',
              defaultValue: '',
            },

            {
              'v-if': '<%:= true %>',
              field: 'avatar',
              title: '头像',
              disabled: false,
              tooltip: '',
              required: false,
              placeholder: '',
              max: 1,
              uploadProps: {
                action: '/api/upload',
                accept: '.png,.jpg',
                multiple: false,
                name: 'file',
              },
              type: 'Upload',
            },
            {
              field: 'sex',
              title: '性别',
              disabled: false,
              tooltip: '',
              required: false,
              placeholder: '',
              options: [
                {
                  label: '男',
                  value: '1',
                },
                {
                  label: '女',
                  value: '0',
                },
              ],
              defaultValue: '1',
              type: 'Radio',
            },
            {
              field: 'season',
              title: '登场季数',
              disabled: false,
              tooltip: '',
              required: false,
              placeholder: '',
              defaultValue: 1,
              type: 'InputNumber',
            },
            {
              field: 'remark',
              title: '人物介绍',
              disabled: false,
              tooltip: '',
              required: false,
              placeholder: '',
              type: 'Input.TextArea',
              rows: 4,
              defaultValue: '',
            },
          ],
          alias: '$$HtForm',
        },
      },
    ],
  },
}
