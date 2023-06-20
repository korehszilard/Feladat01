export function feladat01(szinek) {
    var colorSet = new Set();
  
    for (var i = 0; i < szinek.length; i++) {
      colorSet.add(szinek[i]);
    }
  
    for (var i = 0; i < szinek.length; i++) {
      for (var j = i + 1; j < szinek.length; j++) {
        var vegyesSzin = mixColors(szinek[i], szinek[j]);
        colorSet.add(vegyesSzin);
      }
    }
  
    return colorSet.size;
  }
  
  function mixColors(szin1, szin2) {
    return szin1 + "+" + szin2;
  }

  public class Feladat01 {
    public int feladat01(String[] szinek) {
        HashSet<String> colorSet = new HashSet<>();

        for (String szin : szinek) {
            colorSet.add(szin);
        }

        int piros = colorSet.contains("red") ? 1 : 0;
        int kék = colorSet.contains("blue") ? 1 : 0;
        int zöld = colorSet.contains("green") ? 1 : 0;
        int keveresek = szinek.length + (szinek.length * (szinek.length - 1)) / 2;

        return colorSet.size() + piros + keveresek;
    }
}

["piros"]

["piros", "kék"]

["piros", "kék", "zöld"]