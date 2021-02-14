import praw
import json
from google.cloud import pubsub_v1
reddit = praw.Reddit(client_id='pa-231aoJHQ0Cg', client_secret='zSv5zOzt6fCZxbaZYPiHBznJUJtHrw', user_agent='wsb-collector')
project_id = "glossy-motif-303023"
topic_id = "wsb-reddit"
publisher = pubsub_v1.PublisherClient()
topic_path = publisher.topic_path(project_id,topic_id)


wsb = reddit.subreddit("wallstreetbets")
for comment in wsb.stream.comments(skip_existing=True):
    try:
        author = str(comment.author)
        body = str(comment.body)
        created = str(comment.created_utc)
        data = {}
        data["author"] = author
        data["body"] = body
        data["created"] = created
        json_data = json.dumps(data)
        message = json_data.encode("utf-8")
        future = publisher.publish(topic_path,message,origin="python-sample",username="gcp")
#        print(future.result())
    except praw.exceptions.PRAWException as e:
        print(e)
        pass
