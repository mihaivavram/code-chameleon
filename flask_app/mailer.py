from flask import Flask
from flask_mail import Mail
from flask_mail import Message
import json

email_password = None

with open('../configs/private_configs.json') as f:
    data = json.load(f)
    email_password = data["email_password"]

app = Flask(__name__)
mail = Mail(app)

app.config.update(
	DEBUG=True,
	#EMAIL SETTINGS
	MAIL_SERVER='smtp.gmail.com',
	MAIL_PORT=465,
	MAIL_USE_SSL=True,
	MAIL_USERNAME = 'mihai.v.avram@gmail.com',
	MAIL_PASSWORD = email_password
)


mail = Mail(app)


@app.route("/")
def index():
	msg = Message("Hello World",
		  sender="mihai.v.avram@gmail.com",
		  recipients=["mihai.v.avram@gmail.com"])

	mail.send(msg)
	return("message sent successfully!")


if __name__ == '__main__':
	app.run(debug=True)