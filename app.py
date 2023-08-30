from flask import Flask, render_template
import os

app = Flask(__name__)

FOOTERS = [
        {'id': 'totkoR', 'href': 'index', 'side': 'images/totkoR.png'},
        {'id': 'totkoL', 'href': 'index', 'side': 'images/totko.png'}
]


@app.route('/')
def index():
    FOOTERS[0]["href"] = 'osculator'
    return render_template('base.html', sketch='js/background.js', footers=[FOOTERS[0]], audio='audio/Creature_sound.mp3')


@app.route('/osculator')
def osculator():
    FOOTERS[0]["href"] = 'portal'
    FOOTERS[1]["href"] = 'index'

    return render_template('base.html', sketch='js/Osculator.js', footers=FOOTERS)


@app.route('/portal-to-pataphyics')
def portal():
    FOOTERS[0]["href"] = 'world'
    FOOTERS[1]["href"] = 'moneypig'

    return render_template('base.html', sketch='js/rotoreliefs.js', footers=FOOTERS, audio='audio/Love is the answer.mp3')


@app.route('/riding-my-money-pig')
def moneypig():

    FOOTERS[0]["href"] = 'professionalia'
    FOOTERS[1]["href"] = 'index'

    return render_template('base.html', sketch='js/riding my money pig.js', footers=FOOTERS, audio='audio/MeMony.mp3')


@app.route('/professionalia')
def professionalia():
    # footers = [
    #     {'id': 'totkoR', 'href': 'professionalia', 'side': ''},
    #     {'id': 'totkoL', 'href': 'index', 'side': ''}]
    imgs = ['images/ear03sm.png', \
		  	'images/ear10sm.png', \
			'images/ear11sm.png', \
			'images/tracian.png', \
			'images/tracian01.png', \
			'images/tromba.png', \
			'images/obj01sm.png', \
			'images/obj02sm.png', \
			'images/obj04sm.png', \
			'images/obj05sm.png', \
			'images/obj07sm.png', \
			'images/obj08sm.png', \
			'images/obj09sm.png', \
			'images/obj10sm.png', \
			'images/obj11sm.png', \
			'images/obj12.png', \
			'images/obj13sm.png', \
			'images/obj14sm.png', \
			'images/obj15sm.png', \
			'images/obj16sm.png', \
			'images/obj17sm.png', \
			'images/obj18sm.png', \
			'images/cracklebox.png', \
			'images/anatomy03sm.png']
    return render_template('professionalia.html', images=imgs)


@app.route('/dont-mess-with-my-world')
def world():

    FOOTERS[0]["href"] = 'wubidubidubidu'
    FOOTERS[1]["href"] = 'portal'

    # return render_template('base.html', sketch='js/movingvid.js', footers=FOOTERS, audio='audio/Minions.mp3', video='videos/totkoGlitchEarth.mp4')
    return render_template('base.html', sketch='js/movingvid.js', footers=FOOTERS)


@app.route('/wubidubidubidu')
def wubidubidubidu():
    FOOTERS[0]["href"] = 'secretchannel'
    FOOTERS[1]["href"] = 'world'

    return render_template('base.html', sketch='js/iara.js', footers=FOOTERS)


@app.route('/my-secret-tv-channel')
def secretchannel():
    FOOTERS[0]["href"] = 'wou'
    FOOTERS[1]["href"] = 'wubidubidubidu'

    return render_template('base.html', footers=FOOTERS, audio='audio/Game.mp3', video='videos/glitchvid.mp4')


@app.route('/we-ourselves-and-us')
def wou():
    FOOTERS[0]["href"] = 'cracklebox'
    FOOTERS[1]["href"] = 'secretchannel'

    return render_template('base.html', sketch='js/sphereOrbit.js', footers=FOOTERS)


@app.route('/crackle-box')
def cracklebox():
    FOOTERS[0]["href"] = 'method'
    FOOTERS[1]["href"] = 'wou'

    return render_template('base.html', sketch='js/crackleBox.js', footers=FOOTERS)


@app.route('/method')
def method():
    FOOTERS[0]["href"] = 'nino'
    FOOTERS[1]["href"] = 'cracklebox'

    return render_template('base.html', sketch='js/method.js', footers=FOOTERS, audio='audio/Be Gentle.mp3')


@app.route('/nino')
def nino():
    FOOTERS[0]["href"] = 'ctrlv'
    FOOTERS[1]["href"] = 'method'

    return render_template('nino.html', sketch='js/nino.js', footers=FOOTERS, audio='audio/soundbite1.mp3')


@app.route('/ctrl+v')
def ctrlv():
    FOOTERS[0]["href"] = 'ponyhof'
    FOOTERS[1]["href"] = 'nino'

    return render_template('base.html', sketch='js/ctrlplus.js', footers=FOOTERS)


@app.route('/ponyhof')
def ponyhof():
    FOOTERS[1]["href"] = 'ctrlv'

    return render_template('base.html', sketch='js/ponyhof.js', footers=[FOOTERS[1]])


if __name__ == '__main__':
    # app.add_url_rule('/static/video/<path:filename>', endpoint='video',
    #                  view_func=app.send_static_file)
    app.run(debug=True)