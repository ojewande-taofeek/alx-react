import * as notifyJson from '../../../../notifications.json' with { type: 'json' };

export default function getAllNotificationsByUser(userId) {
  const notifications = notifyJson.default; // if notifyJson is logged, its values are wrapped in default
    return (
      notifications
        .filter((post) => post.author.id === userId)
        .map((userPost) => userPost.context)
    );
}
