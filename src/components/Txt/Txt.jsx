
import useScrollFadeIn from '../../hooks/UseScrollFadeIn'

export function Txt() {
    const delaytime = 0.2
    const animatedItem = {
        0: useScrollFadeIn('up', 1, delaytime),
        1: useScrollFadeIn('up', 1, delaytime),
        2: useScrollFadeIn('up', 1, delaytime),
        3: useScrollFadeIn('up', 1, delaytime),
        4: useScrollFadeIn('up', 1, delaytime),
        5: useScrollFadeIn('up', 1, delaytime),
        6: useScrollFadeIn('up', 1, delaytime),
        7: useScrollFadeIn('up', 1, delaytime),
        8: useScrollFadeIn('up', 1, delaytime),
        9: useScrollFadeIn('up', 1, delaytime),
        10: useScrollFadeIn('up', 1, delaytime),
        11: useScrollFadeIn('up', 1, delaytime),
        12: useScrollFadeIn('up', 1, delaytime),
        13: useScrollFadeIn('up', 1, delaytime),
        14: useScrollFadeIn('up', 1, delaytime),
        15: useScrollFadeIn('up', 1, delaytime),
        16: useScrollFadeIn('up', 1, delaytime),
        17: useScrollFadeIn('up', 1, delaytime),
        18: useScrollFadeIn('up', 1, delaytime),
        19: useScrollFadeIn('up', 1, delaytime),
        20: useScrollFadeIn('up', 1, delaytime),
        21: useScrollFadeIn('up', 1, delaytime),
        22: useScrollFadeIn('up', 1, delaytime),
        23: useScrollFadeIn('up', 1, delaytime),
        24: useScrollFadeIn('up', 1, delaytime),
        25: useScrollFadeIn('up', 1, delaytime),
        26: useScrollFadeIn('up', 1, delaytime),
        27: useScrollFadeIn('up', 1, delaytime),
        28: useScrollFadeIn('up', 1, delaytime),
        29: useScrollFadeIn('up', 1, delaytime),
        30: useScrollFadeIn('up', 1, delaytime),
      };
    return(
        <div className="footer_defence">
            <h1 {...animatedItem[0]}>txttxttxt</h1>
            <h1 {...animatedItem[1]}>.</h1>
            <h1 {...animatedItem[2]}>.</h1>
            <h1 {...animatedItem[3]}>.</h1>
            <h1 {...animatedItem[4]}>.</h1>
            <h1 {...animatedItem[5]}>.</h1>
            <h1 {...animatedItem[6]}>.</h1>
            <h1 {...animatedItem[7]}>.</h1>
            <h1 {...animatedItem[8]}>.</h1>
            <h1 {...animatedItem[9]}>.</h1>
            <h1 {...animatedItem[10]}>.</h1>
            <h1 {...animatedItem[11]}>.</h1>
            <h1 {...animatedItem[12]}>.</h1>
            <h1 {...animatedItem[13]}>.</h1>
            <h1 {...animatedItem[14]}>.</h1>
            <h1 {...animatedItem[15]}>.</h1>
            <h1 {...animatedItem[16]}>.</h1>
            <h1 {...animatedItem[17]}>.</h1>
            <h1 {...animatedItem[18]}>.</h1>
            <h1 {...animatedItem[19]}>.</h1>
            <h1 {...animatedItem[20]}>.</h1>
            <h1 {...animatedItem[21]}>.</h1>
            <h1 {...animatedItem[22]}>.</h1>
            <h1 {...animatedItem[23]}>.</h1>
            <h1 {...animatedItem[24]}>.</h1>
            <h1 {...animatedItem[25]}>.</h1>
            <h1 {...animatedItem[26]}>.</h1>
            <h1 {...animatedItem[27]}>.</h1>
            <h1 {...animatedItem[28]}>.</h1>
            <h1 {...animatedItem[29]}>.</h1>
            <h1 {...animatedItem[30]}>hello</h1>
        </div>
    )
}