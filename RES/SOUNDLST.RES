
;*****************************************************************************
;
; Author:		Kurt W. Dekker
; Started:		02/03/97 @ 16:13
; Updated:		07/02/97
; Filename:		SOUNDS.RES
;
; Description:	Sound list file for Bomberman.
;
; These files all should have a .RSS extension and be raw 22khz Stereo 16bit
; signed, Intel-endian.
;
;*****************************************************************************
;

10,menuexit

20,letter1
21,letter2

; some kind of "you can't do that here" sound
40,enrt1
41,enrt2

; dropping a bomb sounds
100,bmdrop2
101,bmdrop3
102,bmdrop1

; kicking a bomb sounds
120,kbomb1
121,kbomb2
122,kicker3
123,kicker10

; stopping a bomb
130,bombstop
131,bmbstop1
132,bmbstop2

; jelly bomb bouncing
135,bombboun
136,1017
137,1036

; 139 is last jelly boing sound

; a solid tile slamming in place (after "hurry" is displayed)
; NOTE! the code is HARD-CODED to play one of the three below randomly.
; if you add more sounds below 142, they will not be used!!!
140,clikplat
141,sqrdrop2
142,sqrdrop4
143,sqrdrop5
144,sqrdrop6
145,sqrdrop7
146,sqrdrop8

; punching a bomb
150,kbomb1
151,kbomb2

; a punched/grabbed bomb bouncing along
160,bmdrop3

; when you grab a bomb
170,grab1
171,grab2
172,bmbthrw1
173,bmbthrw3
174,bmbthrw4
175,bmbthrw5

; bomb explosion sounds
200,expl6
201,explo1
202,explode2
203,explode3
204,explode4
205,Bomb_01
206,Bomb_02
207,Bomb_04
208,Bomb_04b
209,Bomb_05
210,Bomb_06
211,Bomb_07
212,Bomb_07b
213,Bomb_09
214,Bomb_11
215,Bomb_12
216,Bomb_12b
217,Bomb_17
218,Bomb_19
219,Bomb_24
;299 is the last exploding bomb sound...

; you die in flames sounds
300,scream1
301,die1

; we have a winner of the match
320,proud
321,theman
322,youwin1

; death anim sounds BASED on which anim is chosen (this is just clunk-type
; sound effects to sync with the anim, no screams or anything);
341,burnedup

; step on a trampoline
350,1017
351,1036
352,1045
353,trampo

; you are stunned by a bomb landing on your head
360,bombhit1
361,bombhit2
362,bombhit3
363,bombhit4

; you get a powerup (a good one)
400,woohoo1
401,get1
402,get2
403,coolpop
404,ALLRITE
405,SCHWING
406,1006
407,1028
408,1041
409,1055
410,1059
411,1062
412,1074
; 499 is the last standard "you get a powerup" sound

; ploppy poop sounds
550,poops1
551,poops2
552,poops3
553,poops4
554,poops5

; after a player death
701,cribrown
702,cul8r
703,gotahurt
704,gotcha
705,later
706,roasted
707,toeasy
708,youblow
709,eatdust
710,smelsmok
711,stupidio
712,suckitdn
713,tastpain
714,tastpai2
715,cribrown
; 999 is the last possible death taunt.

; title page music
;1000,title
; main menu music
1010,menu
; music for input selection
1020,win
; game is over screen music
1030,lose
; join/start a network game
1040,network
; music for actual game play
1099,xxx			; just to prevent crashing
;1100,grnacres
;1101,generic
;1102,hockey
;1103,pyramid
;1104,mineshft
;1105,battle
;1106,gieger
;1107,haunted
;1108,ocean
;1109,swamp
;1110,sewer

; what we play when we're doing net play on minimum install.
;1120,generic

; (used for end of a game, generally)
1130,draw

; after laying out a HUGE string of bombs
1200,clear
1201,fireinh
1202,lookout
1203,litemup
1204,runaway1
1205,runaway2
;1299 is last "huge string of bombs" sound value

; periodic roulette "tick" sound
1300,1041

; clapping people, happy sound
;1310,1000

; buzzer sound, you got the molasses roulette powerup (powerdown)
1320,1049

; a warp-hole transfer sound
1330,warp1
;1331,transin
;1332,transout

; you are now AWESOME (7th powerup and 3rd thereafter)
;1400,pu1
;1401,pu2
;1402,pu3
1400,BACKUP
1401,BACKUP1
1402,BRINGON
1403,bringon
1404,COMEGET
1405,DABOMB
1406,ELAUGH1
1407,FEELPOWR
1408,OHYEAH
1409,PACKIN
1410,theman
1411,WHATRUSH
1412,WHODAD
1413,YEEHAW
1414,destu1
1415,destu2
1416,zen1
1417,zen2
1418,calldad
1419,drabom
1420,fillcrak
1421,inzone
1422,hitstrid
1423,inzone
1424,lovnit1
1425,luvyap
1426,playprop
1427,serendip
1428,shakeboo
1429,wantmnky
1430,wlktal1
1431,wlktal2
1432,wantmnky
; 1699 is the last AWESOME powerup sound...

; tie game/draw game
1700,gump1
; 1999 is the last tie game/draw game sound

; these are the "we have a winner" sounds... we have a winner of the match
2000,proud
2001,theman
2002,youwin1
; 2299 is the last "we have a winner" sound number.

; generic (non-specific) disease sound
2300,PGAD12B
; 2599 is the last generic (non-specific) disease sound

; exiting game (go outside and play now!
2600,quitgame
; 2699 is the last "leaving the program" sound

; plays when "hurry" flashes across the screen.
2700,hurry
2701,hurytuf
; 2799 is last "hurry up!" sound

; title intro statement "ATOMIC BOMBERMAN!"
2800,GEN8A
; 2899 is the last intro "Atomic Bomberman!" sound

2900,0		;; dummy value; do not take this out!

; specific sounds for each disease type
; molasses
3000,disease1
3001,molases
3002,ohno1

; crack
3050,disease2

; constipation
3100,disease3
;3101,DIS4A
;3102,DIS4B
;3103,DIS4C

; poops
3150,DIS2A

; short flame
3200,disease1
3201,ewtahh

; crack poops
3250,ewtahh

; short fuze
3300,disease2
3301,2mucpain

; swap 2 players
3350,disease3
3351,ohhhh

; controls reversed
3400,disease1

; leprosy
3450,disease2

; invisible
3500,disease3

; duds
3550,disease1
