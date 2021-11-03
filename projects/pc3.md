---
layout: project
type: project
image: images/pc3.png
title: Predictive Coding for Locally-Linear Control
permalink: projects/pc3
# All dates must be YYYY-MM-DD format!
date: 2014-04-12
summary: "Abstract: High-dimensional observations and unknown dynamics are major challenges when applying optimal control to many real-world decision making tasks. The Learning Controllable Embedding (LCE) framework addresses these challenges by embedding the observations into a lower dimensional latent space, estimating the latent dynamics, and then performing control directly in the latent space. To ensure the learned latent dynamics are predictive of next-observations, all existing LCE approaches decode back into the observation space and explicitly perform next-observation prediction---a challenging high-dimensional task that furthermore introduces a large number of nuisance parameters (i.e., the decoder) which are discarded during control. In this paper, we propose a novel information-theoretic LCE approach and show theoretically that explicit next-observation prediction can be replaced with predictive coding. We then use predictive coding to develop a decoder-free LCE model whose latent dynamics are amenable to locally-linear control. Extensive experiments on benchmark tasks show that our model reliably learns a controllable latent space that leads to superior performance when compared with state-of-the-art LCE baselines."
authors: Rui Shu*, Tung Nguyen*, Yinlam Chow, Tuan Pham, Khoat Than, Mohammad Ghavamzadeh, Stefano Ermon, Hung H. Bui
projecturl: https://arxiv.org/abs/2003.01086
---

<img class="ui image" src="{{ site.baseurl }}/images/cotton-header.png">

Cotton is a horror-esque text-based adventure game I developed using the functions and macros built from The Wizard's Game in [Conrad Barski's Land of Lisp](http://landoflisp.com/). Slightly more interesting and convoluted! (It is not that scary.)

To give you a flavor of the game, here is an excerpt from one run:

<hr>

<pre>
You open your eyes, and you are greeted by an unfamiliar ceiling.
Startled, you get to your feet and quickly scan your surroundings. It's
dark except for the stream of light coming from a crack on the only boarded
window in the room. You try to peek through the crack, but you cannot see
anything. You wonder where you are and who could have possibly brought you here.

<--------------------help------------------------>
Enter quit or one of the following commands -
Weld light look walk pickup inventory help h ?
<------------------------------------------------>

look
The room is a picture of decay with only a faded number identifying it as room-4. The bed you were
 lying on is stained with what looks like dried blood. Could it be your blood? No - it is not. The
 only way out of the room aside from the door to the corridor is a window that is boarded shut. It
 looks like it has been like that for decades. There is a door going west from here. You see a candle
 on the floor. You see a match on the floor.

pickup candle
- you are now carrying the candle -

pickup match
- you are now carrying the match -

light match candle

The candle is now lit. It illuminates everything in the room.

walk west
The corridor is lit with the candle. It is so long that you cannot see to the end. You notice that
 there are words written on the wall. There is a door going east from here. There is a way going north
 from here. There is a door going south from here.
</pre>

<hr>

Source: <a href="https://github.com/jogarces/ics-313-text-game"><i class="large github icon "></i>jogarces/ics-313-text-game</a>

