import Ember from 'ember';

const { computed } = Ember;
const { service } = Ember.inject;

const groupedSections = [
  {
    groupName: 'Getting started',
    options: [
      { route: 'docs.index',              text: 'Overview' },
      { route: 'docs.installation',       text: 'Installation' },
      { route: 'docs.how-to-use-it',      text: 'How to use it' },
      { route: 'docs.action-handling',    text: 'Action handling' },
      { route: 'docs.groups',             text: 'Groups' },
      { route: 'docs.multiple-selection', text: 'Multiple selection' }
    ]
  },
  {
    groupName: 'Basic customization',
    options: [
      { route: 'docs.the-list',         text: 'The list' },
      { route: 'docs.selected-element', text: 'Selected element' },
      { route: 'docs.messages',         text: 'Messages' },
      { route: 'docs.filtering',        text: 'Filtering' },
      { route: 'docs.styles',           text: 'Styles' },
    ]
  },
  {
    groupName: 'Advanced customization',
    options: [
      { route: 'docs.partials',               text: 'Partials' },
      { route: 'docs.asynchronous-search',    text: 'Asynchronous search' },
      { route: 'docs.roll-your-own-template', text: 'Roll your own template' },
    ]
  }
];

export default Ember.Controller.extend({
  routing: service('-routing'),
  groupedSections: groupedSections,

  currentSection: computed('routing.currentRouteName', function() {
    const currentRouteName = this.get('routing.currentRouteName');
    for (let group of groupedSections) {
      for (let section of group.options){
        if (section.route === currentRouteName) {
          return section;
        }
      }
    }
  }),

  actions: {
    visit(section) {
      this.transitionToRoute(section.route);
    }
  }
});
