import java.util.Scanner; 
import java.math.BigInteger;

// 注意类名必须为 Main, 不要有任何 package xxx 信息
public class Main {
    static final BigInteger MOD = BigInteger.valueOf(1_000_000_007);
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        // 注意 hasNext 和 hasNextLine 的区别
        while (in.hasNextInt()) { // 注意 while 处理多个 case
            int n = in.nextInt();
            int[] nums = new int[n];
            for(int i=0;i<n;i++){
                nums[i] = in.nextInt();
            } 
            BigInteger p = BigInteger.ONE;
            for(int num: nums){
                p = p.multiply(factorial(num).mod(MOD));
            }
            int count = countFactors(p);
            System.out.println(count);
        }
    }
    public static  BigInteger factorial(int n ){
        BigInteger result = BigInteger.ONE;
        for(int i =2;i<=n;i++){
            result = result.multiply(BigInteger.valueOf(i)).mod(MOD);
        }
        return result;
    }
    public static int countFactors(BigInteger n){
        int count = 0;
        for(BigInteger i = BigInteger.ONE;i.compareTo(n)<=0;i=i.add(BigInteger.ONE)){
            if(n.remainder(i).equals(BigInteger.ZERO)){
                count++;
            }
        }
        return count;
    }
}