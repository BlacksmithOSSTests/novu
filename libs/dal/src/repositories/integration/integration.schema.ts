import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';
import * as mongooseDelete from 'mongoose-delete';

import { schemaOptions } from '../schema-default.options';
import { IntegrationDBModel } from './integration.entity';

const integrationSchema = new Schema<IntegrationDBModel>(
  {
    _environmentId: {
      type: Schema.Types.ObjectId,
      ref: 'Environment',
      index: true,
    },
    _organizationId: {
      type: Schema.Types.ObjectId,
      ref: 'Organization',
    },
    providerId: Schema.Types.String,
    channel: Schema.Types.String,
    credentials: {
      apiKey: Schema.Types.String,
      user: Schema.Types.String,
      secretKey: Schema.Types.String,
      domain: Schema.Types.String,
      password: Schema.Types.String,
      host: Schema.Types.String,
      port: Schema.Types.String,
      secure: Schema.Types.String,
      region: Schema.Types.String,
      accountSid: Schema.Types.String,
      messageProfileId: Schema.Types.String,
      token: Schema.Types.String,
      from: Schema.Types.String,
      senderName: Schema.Types.String,
      applicationId: Schema.Types.String,
      clientId: Schema.Types.String,
      projectName: Schema.Types.String,
      serviceAccount: Schema.Types.String,
      baseUrl: Schema.Types.String,
    },

    active: {
      type: Schema.Types.Boolean,
      default: false,
    },
  },
  schemaOptions
);

integrationSchema.plugin(mongooseDelete, { deletedAt: true, deletedBy: true, overrideMethods: 'all' });

// eslint-disable-next-line @typescript-eslint/naming-convention
export const Integration =
  (mongoose.models.Integration as mongoose.Model<IntegrationDBModel>) ||
  mongoose.model<IntegrationDBModel>('Integration', integrationSchema);
