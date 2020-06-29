socketio_chat

Limitations:

File contents are stored directly in MongoDB and due to size limitation of documents without GridFS, files are limited to max 12mb.
History of a chat room is retrieved in one go, so responsiveness is poor when there are files involved.

Todo:
Use S3 to store files
Retrieve history in sections
Notification for new messages and user joining
