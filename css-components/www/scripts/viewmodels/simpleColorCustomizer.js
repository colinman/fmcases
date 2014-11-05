'use strict';

angular.module('app').factory('SimpleColorCustomizer', function(ColorCustomizer) {
  var groups = [
    {
      name: 'Global',
      items: [
        {
          name: 'background-color',
          displayName: 'Background Color'
        },

        {
          name: 'text-color',
          displayName: 'Text Color'
        },

        {
          name: 'sub-text-color',
          displayName: 'Subtext Color'
        },

        {
          name: 'highlight-color',
          displayName: 'Highlight Color'
        },

        {
          name: 'second-highlight-color',
          displayName: 'Second Highlight Color'
        },

        {
          name: 'border-color',
          displayName: 'Border Color'
        }
      ]
    },

    {
      name: 'Toolbar',
      items: [
        {
          name: 'toolbar-background-color',
          displayName: 'Background Color'
        },

        {
          name: 'toolbar-text-color',
          displayName: 'Text Color'
        },

        {
          name: 'toolbar-button-color',
          displayName: 'Button Color'
        },

        {
          name: 'toolbar-border-color',
          displayName: 'Border Color'
        }
      ]
    },

    {
      name: 'Button Bar',
      items: [
        {
          name: 'buttonbar-color',
          displayName: 'Color'
        },
        {
          name: 'buttonbar-active-text-color',
          displayName: 'Active Text Color'
        }
      ]
    },

    {
      name: 'List',
      items: [
        {
          name: 'list-background-color',
          displayName: 'Background Color'
        },
        {
          name: 'list-tap-active-background-color',
          displayName: 'Active Background Color'
        },
        {
          name: 'list-header-background-color',
          displayName: 'Header Background Color'
        }
      ]
    },

    {
      name: 'Tabbar',
      items: [
        {
          name: 'tabbar-background-color',
          displayName: 'Background Color'
        },
        {
          name: 'tabbar-text-color',
          displayName: 'Text Color'
        },
        {
          name: 'tabbar-highlight-text-color',
          displayName: 'Highlight Text Color'
        },
        {
          name: 'tabbar-border-color',
          displayName: 'Border Color'
        }
      ]
    },

    {
      name: 'Modal',
      items: [
        {
          name: 'modal-background-color',
          displayName: 'Background Color'
        },
        {
          name: 'modal-text-color',
          displayName: 'Text Color'
        }
      ]
    },

    {
      name: 'Alert Dialog',
      items: [
        {
          name: 'alert-dialog-background-color',
          displayName: 'Background Color'
        },
        {
          name: 'alert-dialog-text-color',
          displayName: 'Text Color'
        },
        {
          name: 'alert-dialog-button-color',
          displayName: 'Button Text Color'
        },
        {
          name: 'alert-dialog-separator-color',
          displayName: 'Separator Color'
        }
      ]
    },

    {
      name: 'Dialog',
      items: [
        {
          name: 'dialog-background-color',
          displayName: 'Background Color'
        }
      ]
    },

    {
      name: 'Popover',
      items: [
        {
          name: 'popover-background-color',
          displayName: 'Background Color'
        },
        {
          name: 'popover-text-color',
          displayName: 'Text Color'
        }
      ]
    },

    {
      name: 'Other',
      items: [
        {
          name: 'switch-highlight-color',
          displayName: 'Switch Highlight Color'
        },
        {
          name: 'notification-background-color',
          displayName: 'Notification Background Color'
        },
      ]
    }
  ];

  var customizer = new ColorCustomizer({itemGroups: groups});

  return customizer;
});
