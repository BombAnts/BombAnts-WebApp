
; NOTE! This is an Atomic Bomberman Scheme File.
; Modify at your own risk.  It is machine-generated and updated.


; this is an internal version control number
-V,2

; this is the textual name of the scheme
-N,For the 'Purists' out there (10)

; scheme brick density (0-100 percent)
-B,90

; actual array data (# is solid, : is brick, . is blank)
;               11111
;     012345678901234
-R, 0,##:::::::::::##
-R, 1,##:#:#:#:#:#:##
-R, 2,##:::::::::::##
-R, 3,##:#:#:#:#:#:##
-R, 4,##:::::::::::##
-R, 5,##:#:#:#:#:#:##
-R, 6,##:::::::::::##
-R, 7,##:#:#:#:#:#:##
-R, 8,##:::::::::::##
-R, 9,##:#:#:#:#:#:##
-R,10,##:::::::::::##

; player starting locations (playerno,X,Y)
-S,0,2,0,0
-S,1,12,10,1
-S,2,12,0,0
-S,3,2,10,1
-S,4,8,4,0
-S,5,4,6,1
-S,6,6,0,0
-S,7,12,4,1
-S,8,8,10,0
-S,9,10,6,1

; powerup information; the fields are:
;   powerup #, bornwith, has_override, override_value, forbidden
;   (note the last text field has no effect; it is only a comment)
-P, 0, 0,0, 0, 0,an extra bomb
-P, 1, 0,0, 0, 0,longer flame length
-P, 2, 0,0, 0, 0,a disease
-P, 3, 0,1, 0, 0,the ability to kick bombs
-P, 4, 0,1, 0, 0,extra speed
-P, 5, 0,1, 0, 0,the ability to punch bombs
-P, 6, 0,1, 0, 0,the ability to grab bombs
-P, 7, 0,1, 0, 0,the spooger
-P, 8, 0,1, 0, 0,goldflame
-P, 9, 0,1, 0, 0,a trigger mechanism
-P,10, 0,1, 0, 0,jelly (bouncy) bombs
-P,11, 0,1, 0, 0,super bad disease
-P,12, 0,1, 0, 0,random
