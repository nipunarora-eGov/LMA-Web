import React from 'react';

const HomeIcon = ({ className, style = {}, fill = '#F47738' }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="home"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 576 512"
  >
    <path
      fill="currentColor"
      d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
    />
  </svg>
);

const ContactIcon = () => (
  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="file-signature"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 576 512"
  >
    <path
      fill="currentColor"
      d="M218.17 424.14c-2.95-5.92-8.09-6.52-10.17-6.52s-7.22.59-10.02 6.19l-7.67 15.34c-6.37 12.78-25.03 11.37-29.48-2.09L144 386.59l-10.61 31.88c-5.89 17.66-22.38 29.53-41 29.53H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h12.39c4.83 0 9.11-3.08 10.64-7.66l18.19-54.64c3.3-9.81 12.44-16.41 22.78-16.41s19.48 6.59 22.77 16.41l13.88 41.64c19.75-16.19 54.06-9.7 66 14.16 1.89 3.78 5.49 5.95 9.36 6.26v-82.12l128-127.09V160H248c-13.2 0-24-10.8-24-24V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24v-40l-128-.11c-16.12-.31-30.58-9.28-37.83-23.75zM384 121.9c0-6.3-2.5-12.4-7-16.9L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1zm-96 225.06V416h68.99l161.68-162.78-67.88-67.88L288 346.96zm280.54-179.63l-31.87-31.87c-9.94-9.94-26.07-9.94-36.01 0l-27.25 27.25 67.88 67.88 27.25-27.25c9.95-9.94 9.95-26.07 0-36.01z"
    />
  </svg>
);

const BrandLogo = ({onClick,className}) => (
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="100%"
    viewBox="0 0 4406 1277"
    enable-background="new 0 0 4406 1277"
		style={{width:"12rem"}}
		onClick={onClick}
		className={className}
  >
    <path
      fill="#FFFFFF"
			style={{opacity:"0"}}
      opacity="1.000000"
      stroke="none"
      d="
M3224.000000,1280.000000 
	C2149.333252,1280.000000 1075.666626,1280.000000 2.000000,1280.000000 
	C2.000000,854.000000 2.000000,428.000000 2.000000,2.000000 
	C1470.666626,2.000000 2939.333252,2.000000 4408.000000,2.000000 
	C4408.000000,428.000000 4408.000000,854.000000 4408.000000,1280.000000 
	C4013.666748,1280.000000 3619.333252,1280.000000 3224.000000,1280.000000 
M282.078644,262.095917 
	C248.105026,262.075012 214.131256,262.009918 180.158051,262.118286 
	C177.482300,262.126801 174.810379,263.342560 171.787689,265.844696 
	C171.759109,267.842010 171.705490,269.839325 171.705460,271.836639 
	C171.701645,526.879639 171.700653,781.922668 171.715210,1036.965698 
	C171.715378,1039.955688 171.919449,1042.945801 173.159775,1047.167480 
	C177.112549,1047.444946 181.065308,1047.965088 185.018097,1047.965454 
	C584.296387,1048.002319 983.574707,1048.000122 1382.853027,1047.997681 
	C1385.852173,1047.997681 1388.883911,1048.215210 1391.836060,1047.833008 
	C1393.244385,1047.650757 1394.501221,1046.297607 1395.737793,1043.667847 
	C1395.731689,1034.694214 1395.744751,1025.720337 1395.716064,1016.746765 
	C1395.610962,983.849854 1395.491943,950.952942 1394.802979,916.499756 
	C1390.821777,916.333191 1386.840698,916.020996 1382.859497,916.020752 
	C1062.240112,915.998169 741.620789,916.002258 421.001404,915.997498 
	C376.008240,915.996826 331.015076,915.962036 285.760864,914.090698 
	C285.740784,910.091370 285.703217,906.092041 285.703156,902.092712 
	C285.700317,693.782227 285.702423,485.471771 285.688507,277.161316 
	C285.688202,272.833374 285.506287,268.505463 285.574371,263.184570 
	C285.024414,262.915222 284.474487,262.645874 282.078644,262.095917 
M3778.922607,888.576355 
	C3774.947754,888.384216 3770.972656,888.024475 3766.997803,888.023987 
	C3560.807129,887.996765 3354.616211,888.010437 3148.425537,887.925537 
	C3144.283936,887.923828 3140.143066,886.808838 3136.969238,885.272888 
	C3138.892822,882.983704 3140.780273,880.662903 3142.745361,878.409973 
	C3166.534912,851.137878 3190.460693,823.983521 3214.100342,796.582397 
	C3240.509033,765.971436 3266.509766,735.008118 3292.969238,704.441528 
	C3316.776611,676.938354 3341.085693,649.870239 3364.947510,622.413757 
	C3385.153320,599.164001 3404.886719,575.503967 3425.099854,552.261047 
	C3448.747070,525.068970 3472.704346,498.146729 3496.495117,471.079163 
	C3510.690918,454.927856 3524.824951,438.722229 3539.223633,422.270294 
	C3540.997559,423.752075 3542.707275,424.838196 3543.987305,426.300446 
	C3566.094727,451.555603 3588.264648,476.757660 3610.176514,502.181885 
	C3625.950439,520.484375 3641.192383,539.245605 3657.005127,557.513489 
	C3666.149170,568.077271 3676.180664,577.869385 3685.420654,588.354492 
	C3711.946289,618.453979 3738.275879,648.726379 3764.675293,678.937317 
	C3787.416016,704.961853 3810.259033,730.898010 3832.842529,757.058411 
	C3848.412842,775.094604 3863.399170,793.637024 3879.059326,811.593201 
	C3890.311035,824.494873 3902.466064,836.605530 3913.825928,849.417175 
	C3934.057373,872.234802 3954.023682,895.288391 3974.041504,918.294739 
	C3994.743164,942.086975 4015.374023,965.940613 4037.106689,991.069580 
	C4038.713623,991.377808 4040.320557,991.953796 4041.927734,991.955383 
	C4092.836670,992.004395 4143.745605,992.025940 4194.654297,991.912231 
	C4197.092773,991.906799 4199.527832,990.631836 4201.910156,988.582886 
	C4176.329590,959.419128 4150.840332,930.174683 4125.144531,901.112671 
	C4095.894043,868.030090 4066.395020,835.166809 4037.120850,802.104797 
	C4004.573486,765.346313 3972.155518,728.473145 3939.685303,691.646606 
	C3919.932617,669.244507 3900.199219,646.825684 3880.435791,624.433167 
	C3860.020508,601.302002 3839.584229,578.189270 3819.148682,555.075928 
	C3799.367676,532.703064 3779.568359,510.346161 3759.790771,487.970062 
	C3738.928955,464.367157 3718.126953,440.711151 3697.219727,417.148743 
	C3672.546143,389.341736 3647.709717,361.679230 3623.088867,333.826080 
	C3599.567627,307.216919 3576.270264,280.409851 3552.782471,253.771255 
	C3548.303711,248.691681 3543.395508,243.990692 3538.401123,238.821030 
	C3521.444092,257.952637 3505.396973,276.059601 3489.347900,294.164490 
	C3464.473633,322.225006 3439.631836,350.314667 3414.711914,378.334656 
	C3392.437256,403.380005 3369.994385,428.275635 3347.772949,453.367584 
	C3318.083496,486.891357 3288.633057,520.626709 3258.901611,554.113098 
	C3225.642090,591.573608 3192.096436,628.780457 3158.832275,666.237122 
	C3117.853760,712.380981 3077.039062,758.670227 3036.150391,804.893921 
	C3018.995361,824.287598 3001.850830,843.690735 2984.669189,863.060913 
	C2960.012207,890.858521 2935.294434,918.602417 2910.661865,946.421631 
	C2893.052734,966.308899 2875.540527,986.281982 2856.836182,1007.089233 
	C2857.401611,1008.012146 2857.885254,1009.659180 2858.545898,1009.733459 
	C2861.509521,1010.066772 2864.523193,1009.994019 2867.518799,1009.994141 
	C3040.765137,1010.000793 3214.011475,1010.000000 3387.257812,1010.000000 
	C3552.175049,1010.000000 3717.092041,1010.001648 3882.009277,1009.988464 
	C3885.333252,1009.988220 3888.661621,1009.861633 3891.968262,1009.572449 
	C3892.118896,1009.559265 3892.077637,1007.353271 3891.144531,1005.237183 
	C3886.421387,1001.574890 3881.705322,997.903381 3876.973877,994.251770 
	C3850.877930,974.111816 3826.374268,952.277039 3806.223633,926.022034 
	C3797.158936,914.211487 3788.841309,901.827576 3778.922607,888.576355 
M1597.781738,540.084412 
	C1598.597412,539.997498 1599.413208,539.910583 1601.335327,540.576233 
	C1606.551514,545.091064 1611.808228,549.560181 1616.976440,554.129211 
	C1635.620117,570.611023 1654.207764,587.156250 1672.865967,603.621582 
	C1694.008545,622.279114 1715.268677,640.803711 1736.360718,659.518005 
	C1763.866089,683.922729 1791.174561,708.549683 1818.718262,732.910889 
	C1849.030884,759.720947 1879.539307,786.309570 1909.916260,813.047119 
	C1938.256592,837.992310 1966.560547,862.979126 1994.835815,887.998169 
	C2024.403442,914.160706 2053.910400,940.391663 2083.458008,966.576599 
	C2096.315674,977.970703 2109.209473,989.324219 2122.261719,1000.850769 
	C2124.091064,999.500610 2125.477539,998.633484 2126.682861,997.562500 
	C2136.107910,989.190308 2145.477783,980.756165 2154.902832,972.384155 
	C2181.452637,948.801086 2208.079102,925.304016 2234.561035,901.645081 
	C2252.128418,885.950195 2269.396240,869.919678 2286.986328,854.250488 
	C2306.291504,837.053467 2325.937256,820.237793 2345.208496,803.003357 
	C2368.959717,781.762512 2392.362061,760.131592 2416.132568,738.912537 
	C2435.420166,721.695007 2455.122559,704.942383 2474.470703,687.791443 
	C2495.834717,668.853516 2517.006104,649.698853 2538.258057,630.634338 
	C2558.511963,612.465149 2578.712402,594.236023 2599.029053,576.137329 
	C2612.643555,564.009277 2626.419678,552.062805 2641.219971,540.175903 
	C2641.956543,540.182983 2642.693115,540.190063 2643.631104,542.034851 
	C2643.651123,699.344849 2643.668701,856.654785 2643.704834,1013.964783 
	C2643.705811,1017.957275 2643.913818,1021.949768 2645.160645,1027.170532 
	C2646.443848,1027.441895 2647.726562,1027.948975 2649.010010,1027.950562 
	C2687.230469,1027.997314 2725.451172,1028.026245 2763.671387,1027.910400 
	C2765.774170,1027.904053 2767.873047,1026.626831 2770.244385,1024.090210 
	C2770.264893,1022.424500 2770.302979,1020.758728 2770.302979,1019.093018 
	C2770.305664,770.195679 2770.305908,521.298340 2770.300049,272.400970 
	C2770.300049,270.069733 2770.217041,267.738464 2769.807617,264.730072 
	C2769.185791,264.903259 2768.563965,265.076447 2766.887207,266.164886 
	C2764.360352,268.313202 2761.808594,270.433075 2759.310303,272.614258 
	C2727.804199,300.121124 2696.333740,327.669037 2664.797852,355.141846 
	C2626.773193,388.267303 2588.710938,421.349365 2550.634766,454.415466 
	C2522.880371,478.517883 2495.018311,502.496094 2467.310547,526.651917 
	C2427.514404,561.346741 2387.879150,596.226074 2348.054932,630.888245 
	C2316.029297,658.762573 2283.759766,686.356384 2251.716797,714.210754 
	C2212.649414,748.171082 2173.720215,782.289856 2134.690674,816.293762 
	C2130.080811,820.310120 2125.217529,824.035583 2120.670166,827.734375 
	C2117.087402,824.947571 2114.364990,823.030090 2111.865723,820.855774 
	C2080.570557,793.626953 2049.325684,766.340271 2018.031250,739.110168 
	C1985.239258,710.576782 1952.434692,682.058044 1919.584839,653.591309 
	C1897.765381,634.683350 1875.779297,615.967468 1854.009155,597.003357 
	C1828.731812,574.984009 1803.693237,552.690552 1778.397827,530.692017 
	C1747.103027,503.475983 1715.584961,476.516724 1684.286011,449.305298 
	C1654.961060,423.810211 1625.853027,398.065613 1596.545898,372.549957 
	C1564.011597,344.224823 1531.400635,315.987396 1498.732300,287.816925 
	C1490.001465,280.288147 1480.939941,273.143066 1471.443237,265.065399 
	C1471.143677,266.062042 1470.844116,267.058685 1470.347534,269.911865 
	C1470.328491,274.242462 1470.292847,278.573059 1470.292725,282.903656 
	C1470.290039,526.095032 1470.290894,769.286438 1470.285767,1012.477844 
	C1470.285767,1016.807861 1470.217651,1021.137878 1471.072876,1026.904297 
	C1472.659912,1027.266724 1474.246338,1027.942993 1475.833984,1027.945557 
	C1513.776978,1028.006958 1551.720093,1028.029053 1589.662842,1027.910522 
	C1591.768188,1027.903931 1593.869751,1026.624512 1596.239136,1024.086426 
	C1596.259644,867.108765 1596.278198,710.131165 1596.311157,553.153503 
	C1596.312012,548.824463 1596.469604,544.495483 1597.781738,540.084412 
z"
    />
    <path
      fill="#8A7C5A"
      opacity="1.000000"
      stroke="none"
      d="
M1472.030151,265.821869 
	C1480.939941,273.143066 1490.001465,280.288147 1498.732300,287.816925 
	C1531.400635,315.987396 1564.011597,344.224823 1596.545898,372.549957 
	C1625.853027,398.065613 1654.961060,423.810211 1684.286011,449.305298 
	C1715.584961,476.516724 1747.103027,503.475983 1778.397827,530.692017 
	C1803.693237,552.690552 1828.731812,574.984009 1854.009155,597.003357 
	C1875.779297,615.967468 1897.765381,634.683350 1919.584839,653.591309 
	C1952.434692,682.058044 1985.239258,710.576782 2018.031250,739.110168 
	C2049.325684,766.340271 2080.570557,793.626953 2111.865723,820.855774 
	C2114.364990,823.030090 2117.087402,824.947571 2120.670166,827.734375 
	C2125.217529,824.035583 2130.080811,820.310120 2134.690674,816.293762 
	C2173.720215,782.289856 2212.649414,748.171082 2251.716797,714.210754 
	C2283.759766,686.356384 2316.029297,658.762573 2348.054932,630.888245 
	C2387.879150,596.226074 2427.514404,561.346741 2467.310547,526.651917 
	C2495.018311,502.496094 2522.880371,478.517883 2550.634766,454.415466 
	C2588.710938,421.349365 2626.773193,388.267303 2664.797852,355.141846 
	C2696.333740,327.669037 2727.804199,300.121124 2759.310303,272.614258 
	C2761.808594,270.433075 2764.360352,268.313202 2767.970947,265.765228 
	C2769.427490,265.379425 2769.800049,265.393311 2770.172852,265.407227 
	C2770.217041,267.738464 2770.300049,270.069733 2770.300049,272.400970 
	C2770.305908,521.298340 2770.305664,770.195679 2770.302979,1019.093018 
	C2770.302979,1020.758728 2770.264893,1022.424500 2769.174316,1025.040771 
	C2726.744629,1025.974976 2685.384766,1025.958496 2644.025146,1025.942139 
	C2643.913818,1021.949768 2643.705811,1017.957275 2643.704834,1013.964783 
	C2643.668701,856.654785 2643.651123,699.344849 2643.591797,540.564148 
	C2642.409424,539.407288 2641.266602,539.721130 2640.123535,540.035034 
	C2626.419678,552.062805 2612.643555,564.009277 2599.029053,576.137329 
	C2578.712402,594.236023 2558.511963,612.465149 2538.258057,630.634338 
	C2517.006104,649.698853 2495.834717,668.853516 2474.470703,687.791443 
	C2455.122559,704.942383 2435.420166,721.695007 2416.132568,738.912537 
	C2392.362061,760.131592 2368.959717,781.762512 2345.208496,803.003357 
	C2325.937256,820.237793 2306.291504,837.053467 2286.986328,854.250488 
	C2269.396240,869.919678 2252.128418,885.950195 2234.561035,901.645081 
	C2208.079102,925.304016 2181.452637,948.801086 2154.902832,972.384155 
	C2145.477783,980.756165 2136.107910,989.190308 2126.682861,997.562500 
	C2125.477539,998.633484 2124.091064,999.500610 2122.261719,1000.850769 
	C2109.209473,989.324219 2096.315674,977.970703 2083.458008,966.576599 
	C2053.910400,940.391663 2024.403442,914.160706 1994.835815,887.998169 
	C1966.560547,862.979126 1938.256592,837.992310 1909.916260,813.047119 
	C1879.539307,786.309570 1849.030884,759.720947 1818.718262,732.910889 
	C1791.174561,708.549683 1763.866089,683.922729 1736.360718,659.518005 
	C1715.268677,640.803711 1694.008545,622.279114 1672.865967,603.621582 
	C1654.207764,587.156250 1635.620117,570.611023 1616.976440,554.129211 
	C1611.808228,549.560181 1606.551514,545.091064 1600.570557,539.661255 
	C1598.761475,538.297913 1597.717163,537.849487 1596.672852,537.401062 
	C1596.633423,538.322876 1596.593872,539.244629 1596.554199,540.166443 
	C1596.469604,544.495483 1596.312012,548.824463 1596.311157,553.153503 
	C1596.278198,710.131165 1596.259644,867.108765 1595.171387,1025.038208 
	C1559.781128,1025.993774 1525.458740,1026.026733 1491.136230,1025.977051 
	C1484.151001,1025.967041 1477.166260,1025.645752 1470.181274,1025.467896 
	C1470.217651,1021.137878 1470.285767,1016.807861 1470.285767,1012.477844 
	C1470.290894,769.286438 1470.290039,526.095032 1470.292725,282.903656 
	C1470.292847,278.573059 1470.328491,274.242462 1470.811279,268.700500 
	C1471.690308,267.007538 1471.942017,266.451782 1472.030151,265.821869 
z"
    />
    <path
      fill="#8A7C5A"
      opacity="1.000000"
      stroke="none"
      d="
M4036.035889,989.767395 
	C4015.374023,965.940613 3994.743164,942.086975 3974.041504,918.294739 
	C3954.023682,895.288391 3934.057373,872.234802 3913.825928,849.417175 
	C3902.466064,836.605530 3890.311035,824.494873 3879.059326,811.593201 
	C3863.399170,793.637024 3848.412842,775.094604 3832.842529,757.058411 
	C3810.259033,730.898010 3787.416016,704.961853 3764.675293,678.937317 
	C3738.275879,648.726379 3711.946289,618.453979 3685.420654,588.354492 
	C3676.180664,577.869385 3666.149170,568.077271 3657.005127,557.513489 
	C3641.192383,539.245605 3625.950439,520.484375 3610.176514,502.181885 
	C3588.264648,476.757660 3566.094727,451.555603 3543.987305,426.300446 
	C3542.707275,424.838196 3540.997559,423.752075 3539.223633,422.270294 
	C3524.824951,438.722229 3510.690918,454.927856 3496.495117,471.079163 
	C3472.704346,498.146729 3448.747070,525.068970 3425.099854,552.261047 
	C3404.886719,575.503967 3385.153320,599.164001 3364.947510,622.413757 
	C3341.085693,649.870239 3316.776611,676.938354 3292.969238,704.441528 
	C3266.509766,735.008118 3240.509033,765.971436 3214.100342,796.582397 
	C3190.460693,823.983521 3166.534912,851.137878 3142.745361,878.409973 
	C3140.780273,880.662903 3138.892822,882.983704 3135.923340,886.176392 
	C3135.466064,888.001892 3135.972168,889.642334 3136.658203,889.721497 
	C3139.619141,890.062927 3142.633301,889.991333 3145.627930,889.991455 
	C3353.487061,889.998413 3561.346191,889.999207 3769.205322,889.985474 
	C3772.865234,889.985229 3776.524902,889.801819 3780.184814,889.703857 
	C3788.841309,901.827576 3797.158936,914.211487 3806.223633,926.022034 
	C3826.374268,952.277039 3850.877930,974.111816 3876.973877,994.251770 
	C3881.705322,997.903381 3886.421387,1001.574890 3891.034668,1006.297241 
	C3887.287354,1007.572327 3883.649902,1007.972778 3880.012451,1007.974915 
	C3814.705322,1008.012756 3749.397949,1008.002502 3684.090820,1008.002502 
	C3412.866211,1008.002502 3141.641357,1008.010437 2870.416748,1007.928223 
	C2866.272705,1007.927002 2862.128906,1006.812073 2857.984863,1006.216797 
	C2875.540527,986.281982 2893.052734,966.308899 2910.661865,946.421631 
	C2935.294434,918.602417 2960.012207,890.858521 2984.669189,863.060913 
	C3001.850830,843.690735 3018.995361,824.287598 3036.150391,804.893921 
	C3077.039062,758.670227 3117.853760,712.380981 3158.832275,666.237122 
	C3192.096436,628.780457 3225.642090,591.573608 3258.901611,554.113098 
	C3288.633057,520.626709 3318.083496,486.891357 3347.772949,453.367584 
	C3369.994385,428.275635 3392.437256,403.380005 3414.711914,378.334656 
	C3439.631836,350.314667 3464.473633,322.225006 3489.347900,294.164490 
	C3505.396973,276.059601 3521.444092,257.952637 3538.401123,238.821030 
	C3543.395508,243.990692 3548.303711,248.691681 3552.782471,253.771255 
	C3576.270264,280.409851 3599.567627,307.216919 3623.088867,333.826080 
	C3647.709717,361.679230 3672.546143,389.341736 3697.219727,417.148743 
	C3718.126953,440.711151 3738.928955,464.367157 3759.790771,487.970062 
	C3779.568359,510.346161 3799.367676,532.703064 3819.148682,555.075928 
	C3839.584229,578.189270 3860.020508,601.302002 3880.435791,624.433167 
	C3900.199219,646.825684 3919.932617,669.244507 3939.685303,691.646606 
	C3972.155518,728.473145 4004.573486,765.346313 4037.120850,802.104797 
	C4066.395020,835.166809 4095.894043,868.030090 4125.144531,901.112671 
	C4150.840332,930.174683 4176.329590,959.419128 4201.003906,989.288330 
	C4145.410645,989.918335 4090.723389,989.842834 4036.035889,989.767395 
z"
    />
    <path
      fill="#8A7C5A"
      opacity="1.000000"
      stroke="none"
      d="
M172.028351,1045.935791 
	C171.919449,1042.945801 171.715378,1039.955688 171.715210,1036.965698 
	C171.700653,781.922668 171.701645,526.879639 171.705460,271.836639 
	C171.705490,269.839325 171.759109,267.842010 172.889267,264.922852 
	C210.601974,264.018616 247.213120,264.036224 284.219116,264.102051 
	C284.613983,264.150269 285.409119,264.177521 285.409119,264.177521 
	C285.506287,268.505463 285.688202,272.833374 285.688507,277.161316 
	C285.702423,485.471771 285.700317,693.782227 285.703156,902.092712 
	C285.703217,906.092041 285.740784,910.091370 286.460876,915.629211 
	C291.445099,917.445129 295.729248,917.964905 300.013489,917.965393 
	C615.164124,918.003235 930.314819,917.997559 1245.465454,918.002441 
	C1295.436401,918.003235 1345.407227,918.037292 1395.378174,918.056030 
	C1395.491943,950.952942 1395.610962,983.849854 1395.716064,1016.746765 
	C1395.744751,1025.720337 1395.731689,1034.694214 1394.870117,1044.738525 
	C1390.338257,1045.872681 1386.673950,1045.992065 1383.009644,1045.992065 
	C982.682251,1046.000488 582.354858,1046.000000 182.027451,1045.997192 
	C178.694412,1045.997192 175.361389,1045.957153 172.028351,1045.935791 
z"
    />
    <path
      fill="#E1FFFF"
      opacity="1.000000"
      stroke="none"
      d="
M172.594055,1046.551636 
	C175.361389,1045.957153 178.694412,1045.997192 182.027451,1045.997192 
	C582.354858,1046.000000 982.682251,1046.000488 1383.009644,1045.992065 
	C1386.673950,1045.992065 1390.338257,1045.872681 1394.914551,1045.641846 
	C1394.501221,1046.297607 1393.244385,1047.650757 1391.836060,1047.833008 
	C1388.883911,1048.215210 1385.852173,1047.997681 1382.853027,1047.997681 
	C983.574707,1048.000122 584.296387,1048.002319 185.018097,1047.965454 
	C181.065308,1047.965088 177.112549,1047.444946 172.594055,1046.551636 
z"
    />
    <path
      fill="#A27358"
      opacity="1.000000"
      stroke="none"
      d="
M1395.090576,917.277832 
	C1345.407227,918.037292 1295.436401,918.003235 1245.465454,918.002441 
	C930.314819,917.997559 615.164124,918.003235 300.013489,917.965393 
	C295.729248,917.964905 291.445099,917.445129 286.591400,916.555420 
	C331.015076,915.962036 376.008240,915.996826 421.001404,915.997498 
	C741.620789,916.002258 1062.240112,915.998169 1382.859497,916.020752 
	C1386.840698,916.020996 1390.821777,916.333191 1395.090576,917.277832 
z"
    />
    <path
      fill="#A7BDAC"
      opacity="1.000000"
      stroke="none"
      d="
M2857.410645,1006.653076 
	C2862.128906,1006.812073 2866.272705,1007.927002 2870.416748,1007.928223 
	C3141.641357,1008.010437 3412.866211,1008.002502 3684.090820,1008.002502 
	C3749.397949,1008.002502 3814.705322,1008.012756 3880.012451,1007.974915 
	C3883.649902,1007.972778 3887.287354,1007.572327 3891.525391,1006.762878 
	C3892.077637,1007.353271 3892.118896,1009.559265 3891.968262,1009.572449 
	C3888.661621,1009.861633 3885.333252,1009.988220 3882.009277,1009.988464 
	C3717.092041,1010.001648 3552.175049,1010.000000 3387.257812,1010.000000 
	C3214.011475,1010.000000 3040.765137,1010.000793 2867.518799,1009.994141 
	C2864.523193,1009.994019 2861.509521,1010.066772 2858.545898,1009.733459 
	C2857.885254,1009.659180 2857.401611,1008.012146 2857.410645,1006.653076 
z"
    />
    <path
      fill="#E1BDAC"
      opacity="1.000000"
      stroke="none"
      d="
M3779.553711,889.140137 
	C3776.524902,889.801819 3772.865234,889.985229 3769.205322,889.985474 
	C3561.346191,889.999207 3353.487061,889.998413 3145.627930,889.991455 
	C3142.633301,889.991333 3139.619141,890.062927 3136.658203,889.721497 
	C3135.972168,889.642334 3135.466064,888.001892 3135.439453,886.646545 
	C3140.143066,886.808838 3144.283936,887.923828 3148.425537,887.925537 
	C3354.616211,888.010437 3560.807129,887.996765 3766.997803,888.023987 
	C3770.972656,888.024475 3774.947754,888.384216 3779.553711,889.140137 
z"
    />
    <path
      fill="#E1FFFF"
      opacity="1.000000"
      stroke="none"
      d="
M4036.571289,990.418457 
	C4090.723389,989.842834 4145.410645,989.918335 4201.031250,989.970947 
	C4199.527832,990.631836 4197.092773,991.906799 4194.654297,991.912231 
	C4143.745605,992.025940 4092.836670,992.004395 4041.927734,991.955383 
	C4040.320557,991.953796 4038.713623,991.377808 4036.571289,990.418457 
z"
    />
    <path
      fill="#E1FFFF"
      opacity="1.000000"
      stroke="none"
      d="
M1470.627075,1026.186035 
	C1477.166260,1025.645752 1484.151001,1025.967041 1491.136230,1025.977051 
	C1525.458740,1026.026733 1559.781128,1025.993774 1595.038330,1025.963745 
	C1593.869751,1026.624512 1591.768188,1027.903931 1589.662842,1027.910522 
	C1551.720093,1028.029053 1513.776978,1028.006958 1475.833984,1027.945557 
	C1474.246338,1027.942993 1472.659912,1027.266724 1470.627075,1026.186035 
z"
    />
    <path
      fill="#E1FFFF"
      opacity="1.000000"
      stroke="none"
      d="
M2644.592773,1026.556396 
	C2685.384766,1025.958496 2726.744629,1025.974976 2769.039062,1025.966309 
	C2767.873047,1026.626831 2765.774170,1027.904053 2763.671387,1027.910400 
	C2725.451172,1028.026245 2687.230469,1027.997314 2649.010010,1027.950562 
	C2647.726562,1027.948975 2646.443848,1027.441895 2644.592773,1026.556396 
z"
    />
    <path
      fill="#A27358"
      opacity="1.000000"
      stroke="none"
      d="
M283.824249,264.053833 
	C247.213120,264.036224 210.601974,264.018616 173.063766,263.999146 
	C174.810379,263.342560 177.482300,262.126801 180.158051,262.118286 
	C214.131256,262.009918 248.105026,262.075012 282.993713,262.656494 
	C283.908813,263.217041 283.824249,264.053833 283.824249,264.053833 
z"
    />
    <path
      fill="#E2DED6"
      opacity="1.000000"
      stroke="none"
      d="
M1597.167969,540.125427 
	C1596.593872,539.244629 1596.633423,538.322876 1596.672852,537.401062 
	C1597.717163,537.849487 1598.761475,538.297913 1600.017334,539.285034 
	C1599.413208,539.910583 1598.597412,539.997498 1597.167969,540.125427 
z"
    />
    <path
      fill="#A69C83"
      opacity="1.000000"
      stroke="none"
      d="
M1471.736694,265.443634 
	C1471.942017,266.451782 1471.690308,267.007538 1470.909790,267.772247 
	C1470.844116,267.058685 1471.143677,266.062042 1471.736694,265.443634 
z"
    />
    <path
      fill="#E2DED5"
      opacity="1.000000"
      stroke="none"
      d="
M2640.671875,540.105469 
	C2641.266602,539.721130 2642.409424,539.407288 2643.491211,539.645264 
	C2642.693115,540.190063 2641.956543,540.182983 2640.671875,540.105469 
z"
    />
    <path
      fill="#E2DED5"
      opacity="1.000000"
      stroke="none"
      d="
M2769.990234,265.068665 
	C2769.800049,265.393311 2769.427490,265.379425 2768.498535,265.307617 
	C2768.563965,265.076447 2769.185791,264.903259 2769.990234,265.068665 
z"
    />
    <path
      fill="#A79D83"
      opacity="1.000000"
      stroke="none"
      d="
M284.219116,264.102051 
	C283.824249,264.053833 283.908813,263.217041 283.916687,262.796783 
	C284.474487,262.645874 285.024414,262.915222 285.491760,263.681030 
	C285.409119,264.177521 284.613983,264.150269 284.219116,264.102051 
z"
    />
  </svg>
);

export { HomeIcon, ContactIcon,BrandLogo };