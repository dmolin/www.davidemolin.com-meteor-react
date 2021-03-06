import {Projects} from '/shared/collections';

export default function () {
  Meteor.publish('projects', function() {
    return Projects.find({}, {sort:{priority:-1, createdAt:-1}});
  });
}