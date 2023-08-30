from flask import Flask, render_template
import os

app = Flask(__name__)

FOOTER_LEFT = 'images/totko.png'
FOOTER_RIGHT = 'images/totkoR.png'


@app.route('/')
def index():
    footers = [{'id': 'totkoR', 'href': 'osculator', 'side': FOOTER_RIGHT}]
    return render_template('base.html', sketch='js/background.js', footers=footers, audio='audio/Creature_sound.mp3')


@app.route('/osculator')
def osculator():
    footers = [
        {'id': 'totkoR', 'href': 'portal', 'side': FOOTER_RIGHT},
        {'id': 'totkoL', 'href': 'index', 'side': FOOTER_LEFT}]

    return render_template('base.html', sketch='js/Osculator.js', footers=footers)


@app.route('/portal-to-pataphyics')
def portal():
    footers = [
        {'id': 'totkoR', 'href': 'world', 'side': FOOTER_RIGHT},
        {'id': 'totkoL', 'href': 'moneypig', 'side': FOOTER_LEFT}]

    return render_template('base.html', sketch='js/rotoreliefs.js', footers=footers, audio='audio/Love is the answer.mp3')


@app.route('/riding-my-money-pig')
def moneypig():
    footers = [
        {'id': 'totkoR', 'href': 'professionalia', 'side': FOOTER_RIGHT},
        {'id': 'totkoL', 'href': 'index', 'side': FOOTER_LEFT}]

    return render_template('base.html', sketch='js/riding my money pig.js', footers=footers, audio='audio/MeMony.mp3')


@app.route('/professionalia')
def professionalia():
    # footers = [
    #     {'id': 'totkoR', 'href': 'professionalia', 'side': FOOTER_RIGHT},
    #     {'id': 'totkoL', 'href': 'index', 'side': FOOTER_LEFT}]

    return render_template('professionalia.html')


@app.route('/dont-mess-with-my-world')
def world():
    footers = [
        {'id': 'totkoR', 'href': 'wubidubidubidu', 'side': FOOTER_RIGHT},
        {'id': 'totkoL', 'href': 'portal', 'side': FOOTER_LEFT}]

    return render_template('base.html', sketch='js/movingvid.js', footers=footers)


@app.route('/wubidubidubidu')
def wubidubidubidu():
    footers = [
        {'id': 'totkoR', 'href': 'secretchannel', 'side': FOOTER_RIGHT},
        {'id': 'totkoL', 'href': 'world', 'side': FOOTER_LEFT}]

    return render_template('base.html', sketch='js/iara.js', footers=footers)


@app.route('/my-secret-tv-channel')
def secretchannel():
    footers = [
        {'id': 'totkoR', 'href': 'wou', 'side': FOOTER_RIGHT},
        {'id': 'totkoL', 'href': 'wubidubidubidu', 'side': FOOTER_LEFT}]

    return render_template('base.html', sketch='js/iara.js', footers=footers)


@app.route('/we-ourselves-and-us')
def wou():
    footers = [
        {'id': 'totkoR', 'href': 'cracklebox', 'side': FOOTER_RIGHT},
        {'id': 'totkoL', 'href': 'secretchannel', 'side': FOOTER_LEFT}]

    return render_template('base.html', sketch='js/sphereOrbit.js', footers=footers)


@app.route('/crackle-box')
def cracklebox():
    footers = [
        {'id': 'totkoR', 'href': 'wou', 'side': FOOTER_RIGHT},
        {'id': 'totkoL', 'href': 'wubidubidubidu', 'side': FOOTER_LEFT}]

    return render_template('base.html', sketch='js/iara.js', footers=footers)

if __name__ == '__main__':
    # app.add_url_rule('/static/video/<path:filename>', endpoint='video',
    #                  view_func=app.send_static_file)
    app.run(debug=True)