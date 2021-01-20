/**
 * @author wizard.song
 * @date 2020/09/19 17:29
 */

export const menu = [
  {
    level: 1,
    title: '知识点',
    icon: 'mail',
    open: false,
    selected: false,
    disabled: false,
    children: [
      {
        level: 2,
        title: '知识点列表',
        icon: 'bars',
        open: false,
        selected: false,
        disabled: false,
        router: '/pages/knowledge/knowledgeList'
      },
      {
        level: 2,
        title: '知识点基本类型列表',
        icon: 'bars',
        open: false,
        selected: false,
        disabled: false,
        router: '/pages/knowledge/knowledgeBaseTypeList'
      },
    ]
  },
  {
    level: 1,
    title: '领域',
    icon: 'mail',
    open: false,
    selected: false,
    disabled: false,
    children: [
      {
        level: 2,
        title: '领域列表',
        icon: 'bars',
        open: false,
        selected: false,
        disabled: false,
        router: '/pages/domain/domainList'
      },
    ]
  },
];
