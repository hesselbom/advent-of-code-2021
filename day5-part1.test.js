const t = require('./day5-part1')

test('day 5 part 1', () => {
  expect(t(`0,9 -> 5,9
8,0 -> 0,8
9,4 -> 3,4
2,2 -> 2,1
7,0 -> 7,4
6,4 -> 2,0
0,9 -> 2,9
3,4 -> 1,4
0,0 -> 8,8
5,5 -> 8,2`)).toBe(5)

  console.log(t(`424,924 -> 206,706
467,565 -> 432,565
722,827 -> 794,899
256,172 -> 810,172
160,853 -> 148,853
292,525 -> 292,699
108,139 -> 108,187
889,789 -> 889,554
226,79 -> 371,79
12,485 -> 265,232
917,864 -> 917,157
710,30 -> 710,988
459,969 -> 459,812
158,961 -> 330,961
146,791 -> 146,220
56,595 -> 24,563
873,233 -> 873,764
969,156 -> 847,278
741,363 -> 621,363
244,162 -> 244,170
288,411 -> 288,668
696,73 -> 696,743
60,966 -> 974,52
236,681 -> 200,681
424,253 -> 56,253
379,407 -> 784,407
177,335 -> 765,923
69,115 -> 921,967
92,11 -> 92,644
311,543 -> 311,106
89,904 -> 661,332
898,342 -> 576,342
369,66 -> 140,295
968,14 -> 511,471
862,420 -> 343,939
857,578 -> 181,578
745,438 -> 243,940
201,693 -> 201,151
20,29 -> 973,982
852,11 -> 852,95
529,960 -> 357,960
317,97 -> 967,747
847,373 -> 321,373
115,863 -> 850,128
79,946 -> 836,189
937,484 -> 937,839
567,774 -> 557,774
192,348 -> 192,630
552,647 -> 272,367
918,573 -> 710,573
896,580 -> 896,305
989,358 -> 775,358
484,833 -> 869,448
966,273 -> 884,355
944,45 -> 171,45
824,228 -> 593,228
19,18 -> 893,892
360,954 -> 417,954
37,14 -> 960,937
18,888 -> 742,888
339,264 -> 339,848
601,532 -> 601,628
540,280 -> 540,615
962,751 -> 255,44
611,135 -> 611,934
988,619 -> 778,409
388,77 -> 388,266
526,656 -> 526,341
942,306 -> 942,309
32,49 -> 931,948
653,866 -> 306,866
141,500 -> 235,500
96,108 -> 883,108
383,242 -> 106,242
557,366 -> 340,366
315,85 -> 262,85
411,115 -> 867,115
517,654 -> 517,735
265,18 -> 807,560
171,426 -> 449,426
507,680 -> 507,823
141,504 -> 141,578
358,970 -> 358,599
304,287 -> 245,287
625,917 -> 625,555
747,987 -> 456,987
673,316 -> 71,316
135,563 -> 95,563
913,677 -> 819,677
17,417 -> 100,417
524,727 -> 767,970
619,87 -> 695,87
748,425 -> 607,425
11,179 -> 770,938
756,869 -> 756,44
647,763 -> 376,763
980,18 -> 32,966
805,780 -> 54,29
923,874 -> 164,115
765,910 -> 765,697
574,588 -> 574,717
323,581 -> 362,581
749,843 -> 749,814
915,841 -> 221,841
252,650 -> 252,959
73,980 -> 73,904
846,37 -> 846,864
899,663 -> 834,663
512,90 -> 512,253
889,979 -> 28,118
650,617 -> 95,62
842,511 -> 429,511
875,136 -> 875,202
123,99 -> 618,594
848,818 -> 848,546
251,342 -> 251,696
263,919 -> 263,512
905,181 -> 905,293
770,674 -> 770,963
554,587 -> 554,190
528,602 -> 528,962
22,901 -> 913,10
685,736 -> 569,736
378,331 -> 361,331
301,339 -> 123,339
556,436 -> 887,767
488,963 -> 488,510
117,495 -> 467,495
884,184 -> 901,184
27,430 -> 27,94
426,505 -> 426,869
292,717 -> 378,717
154,790 -> 769,790
476,154 -> 408,154
391,937 -> 819,937
449,388 -> 449,677
420,183 -> 725,488
235,428 -> 235,468
515,357 -> 515,312
493,337 -> 76,337
416,343 -> 416,456
713,979 -> 713,253
812,51 -> 812,696
395,659 -> 486,750
68,636 -> 752,636
620,680 -> 620,769
610,549 -> 516,549
316,461 -> 316,248
455,424 -> 227,424
49,23 -> 943,23
13,932 -> 876,69
966,116 -> 966,775
802,763 -> 892,763
617,161 -> 617,379
661,228 -> 661,50
872,913 -> 872,610
792,441 -> 877,441
611,676 -> 611,968
297,271 -> 127,101
276,586 -> 276,981
630,778 -> 289,778
892,849 -> 78,35
201,857 -> 726,857
363,876 -> 78,876
813,190 -> 184,819
984,20 -> 33,971
591,451 -> 718,578
548,235 -> 981,235
51,317 -> 359,317
179,244 -> 751,244
864,976 -> 541,976
707,675 -> 707,45
248,565 -> 306,565
302,629 -> 302,125
383,477 -> 383,388
533,663 -> 848,348
566,124 -> 81,609
479,391 -> 365,391
33,971 -> 243,971
129,14 -> 798,683
335,777 -> 790,322
780,817 -> 351,388
732,306 -> 732,730
642,884 -> 953,884
912,488 -> 977,553
437,309 -> 437,330
646,306 -> 646,632
41,822 -> 41,672
758,238 -> 678,238
610,79 -> 940,79
746,473 -> 467,752
121,723 -> 635,723
46,645 -> 321,920
843,558 -> 518,233
84,81 -> 659,656
976,280 -> 320,936
833,881 -> 174,881
988,49 -> 72,965
262,51 -> 262,654
82,518 -> 716,518
502,168 -> 502,151
596,125 -> 375,125
953,936 -> 120,103
471,451 -> 586,451
571,740 -> 571,30
601,866 -> 789,866
446,527 -> 928,527
212,417 -> 296,417
879,117 -> 189,807
949,435 -> 369,435
116,971 -> 136,971
493,265 -> 86,672
442,379 -> 143,678
981,343 -> 981,978
656,218 -> 656,428
538,233 -> 538,196
771,632 -> 771,29
81,908 -> 960,29
251,514 -> 446,709
747,294 -> 147,894
838,77 -> 43,872
347,292 -> 347,516
135,262 -> 135,987
913,184 -> 225,872
485,773 -> 790,773
499,201 -> 499,167
895,115 -> 895,422
54,77 -> 54,240
23,63 -> 799,839
470,631 -> 241,402
731,307 -> 722,298
966,578 -> 431,578
327,391 -> 348,391
889,687 -> 268,687
262,153 -> 649,540
349,91 -> 349,566
460,281 -> 460,551
887,195 -> 887,253
365,631 -> 456,540
411,941 -> 260,790
252,757 -> 125,757
548,894 -> 953,489
348,953 -> 215,953
145,474 -> 145,941
65,34 -> 894,863
442,496 -> 123,177
92,123 -> 257,123
840,548 -> 840,969
620,878 -> 311,878
378,865 -> 834,409
221,549 -> 985,549
478,517 -> 70,517
968,975 -> 14,21
36,380 -> 274,142
258,555 -> 258,601
386,434 -> 386,675
215,240 -> 215,224
445,170 -> 445,659
848,476 -> 750,574
895,665 -> 589,665
73,210 -> 441,210
17,559 -> 17,599
344,205 -> 932,205
305,760 -> 305,924
93,517 -> 93,960
911,737 -> 782,737
804,590 -> 303,89
927,239 -> 927,891
19,121 -> 885,987
667,529 -> 852,714
121,668 -> 74,715
33,426 -> 33,130
184,170 -> 978,964
316,859 -> 700,475
791,719 -> 791,241
528,178 -> 510,178
317,146 -> 949,146
113,981 -> 855,239
948,895 -> 758,895
768,43 -> 768,963
61,223 -> 61,97
609,737 -> 609,333
521,492 -> 447,566
844,446 -> 830,446
880,48 -> 49,879
349,931 -> 560,931
333,773 -> 333,476
660,956 -> 241,956
479,682 -> 136,682
324,351 -> 324,604
71,736 -> 71,344
579,349 -> 579,340
639,748 -> 639,23
634,235 -> 961,235
205,131 -> 205,542
570,584 -> 570,486
37,33 -> 589,585
747,585 -> 747,477
801,840 -> 719,922
375,582 -> 809,582
397,331 -> 163,331
898,592 -> 898,119
239,589 -> 57,589
172,156 -> 172,499
956,108 -> 367,697
144,350 -> 644,350
934,44 -> 934,327
609,38 -> 609,75
120,428 -> 79,428
976,963 -> 120,107
275,103 -> 275,549
414,221 -> 414,921
970,986 -> 14,30
453,947 -> 404,947
284,803 -> 806,803
321,781 -> 321,476
942,560 -> 760,378
499,564 -> 499,654
458,445 -> 458,416
128,39 -> 723,634
899,355 -> 518,736
914,155 -> 380,155
594,618 -> 594,65
676,361 -> 667,361
624,421 -> 624,617
645,950 -> 613,950
218,347 -> 218,733
239,357 -> 239,178
366,552 -> 677,552
657,95 -> 203,549
789,552 -> 396,552
27,956 -> 981,956
814,115 -> 814,620
497,661 -> 497,583
843,743 -> 843,707
910,708 -> 910,132
147,806 -> 147,491
638,889 -> 305,556
37,43 -> 949,955
526,495 -> 432,495
44,970 -> 44,329
368,130 -> 368,761
202,621 -> 319,504
627,710 -> 159,242
256,457 -> 267,457
85,438 -> 169,438
580,866 -> 584,866
504,307 -> 17,794
942,977 -> 24,59
903,588 -> 903,234
276,551 -> 276,783
365,306 -> 454,306
535,852 -> 961,852
211,253 -> 211,888
989,10 -> 11,988
45,461 -> 45,922
250,721 -> 72,721
74,795 -> 74,457
543,175 -> 185,175
680,935 -> 105,360
337,13 -> 637,313
13,37 -> 939,963
23,951 -> 935,39
976,927 -> 441,392
962,630 -> 626,630
847,931 -> 321,405
21,220 -> 419,220
196,660 -> 196,58
846,462 -> 657,462
395,279 -> 395,844
164,311 -> 43,190
775,629 -> 567,421
274,195 -> 657,195
169,810 -> 963,16
473,880 -> 216,880
354,953 -> 473,953
35,490 -> 843,490
740,577 -> 740,846
841,967 -> 889,919
927,610 -> 474,610
838,30 -> 27,841
211,543 -> 650,543
541,274 -> 441,174
438,30 -> 438,642
16,492 -> 16,529
984,783 -> 280,79
95,673 -> 819,673
516,777 -> 516,253
544,819 -> 544,777
729,669 -> 103,669
618,353 -> 618,796
259,449 -> 743,933
407,151 -> 407,316
811,975 -> 155,975
167,625 -> 71,529
298,563 -> 298,197
385,324 -> 385,21
957,204 -> 957,808
10,27 -> 943,960
412,979 -> 279,979
668,930 -> 569,930
466,827 -> 141,827
924,214 -> 471,667
773,149 -> 976,352
977,736 -> 977,543
162,814 -> 265,711
106,62 -> 106,552
263,872 -> 434,872
692,632 -> 352,632
24,53 -> 24,300
722,774 -> 722,580
605,129 -> 605,841
275,206 -> 648,579
92,950 -> 940,102
500,101 -> 500,891
278,832 -> 826,832
681,837 -> 681,23
369,661 -> 278,661
883,14 -> 498,14
725,158 -> 826,158
770,451 -> 634,451
343,905 -> 742,905
203,193 -> 86,193
662,340 -> 378,624
980,151 -> 980,848
536,650 -> 531,650
730,415 -> 180,965
220,930 -> 220,507
358,598 -> 126,598
251,381 -> 80,552
786,133 -> 113,133
466,443 -> 203,443
478,859 -> 890,447
281,279 -> 281,585
735,605 -> 735,610
570,856 -> 545,856
254,162 -> 677,585
689,566 -> 689,836
678,179 -> 563,179
617,334 -> 133,818
639,327 -> 639,352
697,95 -> 697,961
953,240 -> 304,889
739,477 -> 846,477
542,131 -> 97,576
497,360 -> 497,66
48,917 -> 942,23
743,313 -> 930,313
540,415 -> 623,415
599,499 -> 519,499
415,908 -> 415,561
989,36 -> 60,965
532,943 -> 445,943
216,719 -> 214,719
961,698 -> 261,698
228,883 -> 132,787
385,283 -> 180,283
278,293 -> 278,41
113,698 -> 113,779
139,456 -> 456,456
227,662 -> 855,34
596,112 -> 87,112
773,221 -> 51,943
588,529 -> 169,529
574,106 -> 302,106
85,73 -> 810,73
371,271 -> 447,195
797,208 -> 45,208
22,700 -> 934,700
523,700 -> 523,247
829,212 -> 829,229
470,415 -> 577,415
53,522 -> 53,585
387,978 -> 387,745
932,261 -> 549,644
34,634 -> 559,109
887,181 -> 887,881
77,779 -> 356,779
862,121 -> 14,969
226,779 -> 226,358
945,157 -> 945,658
808,103 -> 914,209
360,640 -> 364,640
567,406 -> 213,760
284,30 -> 139,30
940,977 -> 940,656
635,624 -> 926,333
837,712 -> 837,414
193,230 -> 193,582
592,621 -> 592,41
986,921 -> 986,836
404,640 -> 933,111
914,309 -> 289,934
537,83 -> 537,389
208,564 -> 208,683
120,191 -> 893,964
18,37 -> 969,988
134,976 -> 134,689
187,842 -> 187,235
526,455 -> 590,455`))
})
