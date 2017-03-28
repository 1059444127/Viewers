import SimpleSchema from 'simpl-schema';
import { MeasurementSchemaTypes } from 'meteor/ohif:measurements/both/schema/measurements';

const CornerstoneHandleSchema = MeasurementSchemaTypes.CornerstoneHandleSchema;

const TargetCRHandlesSchema = new SimpleSchema({
    start: {
        type: CornerstoneHandleSchema,
        label: 'Start'
    },
    end: {
        type: CornerstoneHandleSchema,
        label: 'End'
    },
    textBox: {
        type: CornerstoneHandleSchema,
        label: 'Text Box'
    }
});

const TargetCRSchema = new SimpleSchema({
    handles: {
        type: TargetCRHandlesSchema,
        label: 'Handles'
    },
    measurementNumber: {
        type: Number,
        label: 'Measurement Number'
    },
    location: {
        type: String,
        label: 'Location',
        optional: true
    },
    response: {
        type: String,
        label: 'Response',
        optional: true // Optional because it is added after initial drawing, via a callback
    },
    description: {
        type: String,
        label: 'Description',
        optional: true
    },
    locationUid: {
        type: String,
        label: 'Location UID',
        optional: true // Optional because it is added after initial drawing, via a callback
    }
});

TargetCRSchema.extend(MeasurementSchemaTypes.CornerstoneToolMeasurement._schema);

export const targetCR = {
    id: 'targetCR',
    name: 'CR Target',
    toolGroup: 'targets',
    cornerstoneToolType: 'targetCR',
    schema: TargetCRSchema,
    options: {
        measurementTable: {
            displayFunction: data => data.response
        },
        caseProgress: {
            include: true
        }
    }
};
