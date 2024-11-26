import * as notifyJson from '../../../../notifications.json' with { type: 'json' };
import { normalize, schema } from 'normalizr';

const notificationsJSON = notifyJson.default; // if notifyJson is logged, its values are wrapped in default
const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', { author: user, context: message });

export const normalizedData = normalize(notificationsJSON, [notification]);

export default function getAllNotificationsByUser(userId) {
    return (
      notificationsJSON
        .filter((post) => post.author.id === userId)
        .map((userPost) => userPost.context)
    );
}
