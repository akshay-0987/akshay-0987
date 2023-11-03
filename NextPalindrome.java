import java.util.*;
class NextPalindrome
{
    public static void main(String[] args)
  {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter palindrome:");
        String n = sc.next();
        String next = NextPalindrome(n);
        System.out.println("Next Palindrome is:"+next);
    }
    public static String NextPalindrome(String n) 
    {
        int num = Integer.parseInt(n);
        while (true) 
        {
            num++;
            String nextNum = String.valueOf(num);
            if (Palindrome(nextNum))
            {
                return nextNum;
            }
        }
    }
    public static boolean Palindrome(String str) 
    {
        int left = 0;
        int right = str.length() - 1;
        while (left < right) {
            if (str.charAt(left) != str.charAt(right)) 
            {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}
