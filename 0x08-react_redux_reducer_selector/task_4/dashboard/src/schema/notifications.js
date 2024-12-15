import * as notifyJson from '../../dist/notifications.json' with { type: 'json' };
import { normalize, schema } from 'normalizr';

export const notificationsJSON = notifyJson.default; // if notifyJson is logged, its values are wrapped in default
const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', { author: user, context: message });

export const normalizedData = normalize(notificationsJSON, [notification]);

export default function getAllNotificationsByUser(userId) {
  const userContext = [];
  for (let value in normalizedData.entities.notifications) {
    if (normalizedData.entities.notifications[value].author === userId) {
      const context = normalizedData.entities.notifications[value].context;
      userContext.push(normalizedData.entities.messages[context]);
    }
  }
  return userContext;
}


export const notificationsNormalizer = (data) => normalize(data, [notification]);
