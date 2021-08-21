from flask import Flask

app = Flask(__name__)

@app.route('/')
def base():
    return 'Welcome to /'

if __name__ == '__main__':
    app.run(debug=True)