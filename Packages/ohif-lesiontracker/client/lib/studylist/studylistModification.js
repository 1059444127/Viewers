import { Meteor } from 'meteor/meteor';
import { Router } from 'meteor/iron:router';
import { OHIF } from 'meteor/ohif:core';

Meteor.startup(function() {
    OHIF.studylist.callbacks.dblClickOnStudy = dblClickOnStudy;
    OHIF.studylist.callbacks.middleClickOnStudy = dblClickOnStudy;

    OHIF.studylist.timepointApi = new OHIF.measurements.TimepointApi();
    //OHIF.studylist.timepointApi.retrieveTimepoints({});
});

/**
 * Lesion Tracker method including Timepoints / other studies
 */
const dblClickOnStudy = data => {
    // Find the relevant timepoint given the clicked-on study
    const timepointApi = OHIF.studylist.timepointApi;
    if (!timepointApi) {
        Router.go('viewerStudies', { studyInstanceUids: data.studyInstanceUid });
        return;
    }

    const timepoint = timepointApi.study(data.studyInstanceUid)[0];
    if (timepoint) {
        Router.go('viewerTimepoint', { timepointId: timepoint.timepointId });
    } else {
        Router.go('viewerStudies', { studyInstanceUids: data.studyInstanceUid });
    }
};
