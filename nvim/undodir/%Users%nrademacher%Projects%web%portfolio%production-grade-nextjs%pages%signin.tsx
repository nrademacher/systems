Vim�UnDo� ��Y��j[i��]��{��X"�K+$4� ��   @   I          <SocialButton type="github" onClick={() => signIn('github')} />   9   =      "       "   "   "    `��9    _�                             ����                                                                                                                                                                                                                                                                                                                                                             `���     �         0       �         0    �         /    5��                          v                      �                      '   v               ]       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `���    �                 5��                          �                      5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `��     �         1       �      
   0    5��                          "                     �                          "                     �    	                      #                     5�_�                    	        ����                                                                                                                                                                                                                                                                                                                                                             `���     �   	      4       �   
      4    �   	      3    5��    	                      #                     �    	                     #              D       5�_�                    	        ����                                                                                                                                                                                                                                                                                                                                                             `���    �      	           5��                          "                     5�_�                    
       ����                                                                                                                                                                                                                                                                                                                                                             `���     �   
      5        �   
      4    5��    
                      g                     �                          h                     �    
                    i                     �                      	   j              	       �                        p                    �                        p                    �                        p                    �       
                 r                    �       
                 r                    �       
                 r                    �       
                 r                    �                        z                    �                     	   z             	       �                        �                    �                     	   �             	       �       #                 �                    �       (                 �                    �       (                 �                    �       (                 �                    �       -                 �                    �       -                 �                    �       0                 �                    �       2                 �                    �       2                 �                    5�_�                       6    ����                                                                                                                                                                                                                                                                                                                                                             `��     �         6      6  // if a user is logged in, never show them this page5��       6                  �                     �       7                 �                     �                         �                     �                        �                    �                        �                    �                        �                    �                        �                    5�_�      	                     ����                                                                                                                                                                                                                                                                                                                                                             `��     �         8        // �         7    5��                          �                     �                        �                    �                        �                    �                        �                    �                        �                    �                        �                    �                        �                    �                     	   �             	       �              	          �      	              5�_�      
           	          ����                                                                                                                                                                                                                                                                                                                                                             `��     �         :        �         9    �         8        useEffect(())5��                         �                     �                        �                     �                          �                     �                         �                     �                        �                    �                        �                    �                        �                    �                        �                    �                        �                    5�_�   	              
          ����                                                                                                                                                                                                                                                                                                                                                             `���     �         <        �         ;    �         :        if (session)5��                         �                     �                        �                     �                          �                     �                         �                     �                        �                    �                        �                    �                        �                    �                     	   �             	       �       	                 �                    �       	                 �                    �       
                 �                    �       	                 �                    �       	                 �                    �       	                 �                    �                        �                    �                        �                    5�_�   
                        ����                                                                                                                                                                                                                                                                                                                                                             `���    �         <        })5��                         �                     �                        �                    �                        �                    �                        �                    �                        �                    �                        �                    �                                            �                                            �                                            �                                            5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `���    �   ;   <           �   :   <   ;    �   9   ;   :    �   8   :   9    �   7   9   8    �   6   8   7    �   5   7   6    �   4   6   5    �   3   5   4    �   2   4   3    �   1   3   2    �   0   2   1    �   /   1   0    �   .   0   /    �   -   /   .    �   ,   .   -    �   +   -   ,    �   *   ,   +    �   )   +   *    �   (   *   )    �   '   )   (    �   &   (   '    �   %   '   &    �   $   &   %    �   #   %   $    �   "   $   #    �   !   #   "    �       "   !    �      !        �              �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �   
          �   	      
    �      
   	    �      	       �             �             �             �             �             �             �              �              <   import React from 'react'   5import { Pane, majorScale, Text } from 'evergreen-ui'   %import Logo from '../components/logo'   5import { signIn, useSession } from 'next-auth/client'   'import { useRouter } from 'next/router'   5import SocialButton from '../components/socialButton'       const Signin = () => {   'const [session, loading] = useSession()     const router = useRouter()       7  // if a user is logged in, never show them this page,     // instead go to app     useEffect(() => {     if (session) {     router.push('/app')     }     }, [session, router])           
  return (   6    <Pane height="100vh" width="100vw" display="flex">         <Pane           height="100%"           width="50%"           borderRight            paddingX={majorScale(8)}            paddingY={majorScale(5)}           background="#47B881"           display="flex"           alignItems="center"           justifyContent="center"         >           <Pane>   0          <Logo color="white" fontSize="60px" />   *          <Pane marginTop={majorScale(2)}>   0            <Text color="white" fontSize="22px">                 Sign in.               </Text>             </Pane>           </Pane>         </Pane>         <Pane           height="100%"           width="50%"           background="tint2"           display="flex"           alignItems="center"           justifyContent="center"            paddingX={majorScale(7)}         >   .        <Pane width="100%" textAlign="center">   ;          <SocialButton type="github" onClick={() => {}} />           </Pane>         </Pane>       </Pane>     )   }       export default Signin�         <        }, [session, router])5��                         
                     �                         
                     �    ;                      �      �              5�_�                    !       ����                                                                                                                                                                                                                                                                                                                                                             `��(     �       "   ;              <Pane>5��                          l                     �                         m                    �                         m                    �                         o                    �                         m                    �                         m                    �                         m                    �                         m                    �                      
   m             
       �                         u                    �                         u                    5�_�                    !       ����                                                                                                                                                                                                                                                                                                                                                             `��?     �       "   ;              <Pane onClick={)}>5��                         v                    5�_�                    !       ����                                                                                                                                                                                                                                                                                                                                                             `��@     �       "   ;              <Pane onClick={()}>5��                          z                     5�_�                    !       ����                                                                                                                                                                                                                                                                                                                                                             `��B    �       "   ;              <Pane onClick={()}> 5��                          x                     �                         y                    �                         |                    �                         |                    �                         |                    �                         |                    �        %                 �                    �        %                 �                    �        %                 �                    �        %                 �                    �        %                 �                    5�_�                    !   *    ����                                                                                                                                                                                                                                                                                                                                                             `��U    �   ;   <           �   :   <   ;    �   9   ;   :    �   8   :   9    �   7   9   8    �   6   8   7    �   5   7   6    �   4   6   5    �   3   5   4    �   2   4   3    �   1   3   2    �   0   2   1    �   /   1   0    �   .   0   /    �   -   /   .    �   ,   .   -    �   +   -   ,    �   *   ,   +    �   )   +   *    �   (   *   )    �   '   )   (    �   &   (   '    �   %   '   &    �   $   &   %    �   #   %   $    �   "   $   #    �   !   #   "    �       "   !    �      !        �              �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �   
          �   	      
    �      
   	    �      	       �             �             �             �             �             �             �              �              ;   import React from 'react'   5import { Pane, majorScale, Text } from 'evergreen-ui'   %import Logo from '../components/logo'   5import { signIn, useSession } from 'next-auth/client'   'import { useRouter } from 'next/router'   5import SocialButton from '../components/socialButton'       const Signin = () => {   )  const [session, loading] = useSession()     const router = useRouter()       7  // if a user is logged in, never show them this page,     // instead go to app     useEffect(() => {       if (session) {         router.push('/app')       }     }, [session, router])       
  return (   6    <Pane height="100vh" width="100vw" display="flex">         <Pane           height="100%"           width="50%"           borderRight            paddingX={majorScale(8)}            paddingY={majorScale(5)}           background="#47B881"           display="flex"           alignItems="center"           justifyContent="center"         >   0        <Pane onClick={() => signIn('github')}>    0          <Logo color="white" fontSize="60px" />   *          <Pane marginTop={majorScale(2)}>   0            <Text color="white" fontSize="22px">                 Sign in.               </Text>             </Pane>           </Pane>         </Pane>         <Pane           height="100%"           width="50%"           background="tint2"           display="flex"           alignItems="center"           justifyContent="center"            paddingX={majorScale(7)}         >   .        <Pane width="100%" textAlign="center">   ;          <SocialButton type="github" onClick={() => {}} />           </Pane>         </Pane>       </Pane>     )   }       export default Signin�       "   ;      0        <Pane onClick={() => signIn('github')}> 5��        *                  �                     �        *                  �                     �    ;                      �      �              5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `��    �          ;      import React from 'react'5��                                                �                                              �                                              �                                              �                                              �                                              �                      	                 	       �               	       	          	       	       5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `��    �   ;   <           �   :   <   ;    �   9   ;   :    �   8   :   9    �   7   9   8    �   6   8   7    �   5   7   6    �   4   6   5    �   3   5   4    �   2   4   3    �   1   3   2    �   0   2   1    �   /   1   0    �   .   0   /    �   -   /   .    �   ,   .   -    �   +   -   ,    �   *   ,   +    �   )   +   *    �   (   *   )    �   '   )   (    �   &   (   '    �   %   '   &    �   $   &   %    �   #   %   $    �   "   $   #    �   !   #   "    �       "   !    �      !        �              �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �   
          �   	      
    �      
   	    �      	       �             �             �             �             �             �             �              �              ;   &import React, {useEffect} from 'react'   5import { Pane, majorScale, Text } from 'evergreen-ui'   %import Logo from '../components/logo'   5import { signIn, useSession } from 'next-auth/client'   'import { useRouter } from 'next/router'   5import SocialButton from '../components/socialButton'       const Signin = () => {   )  const [session, loading] = useSession()     const router = useRouter()       7  // if a user is logged in, never show them this page,     // instead go to app     useEffect(() => {       if (session) {         router.push('/app')       }     }, [session, router])       
  return (   6    <Pane height="100vh" width="100vw" display="flex">         <Pane           height="100%"           width="50%"           borderRight            paddingX={majorScale(8)}            paddingY={majorScale(5)}           background="#47B881"           display="flex"           alignItems="center"           justifyContent="center"         >   /        <Pane onClick={() => signIn('github')}>   0          <Logo color="white" fontSize="60px" />   *          <Pane marginTop={majorScale(2)}>   0            <Text color="white" fontSize="22px">                 Sign in.               </Text>             </Pane>           </Pane>         </Pane>         <Pane           height="100%"           width="50%"           background="tint2"           display="flex"           alignItems="center"           justifyContent="center"            paddingX={majorScale(7)}         >   .        <Pane width="100%" textAlign="center">   ;          <SocialButton type="github" onClick={() => {}} />           </Pane>         </Pane>       </Pane>     )   }       export default Signin�          ;      &import React, {useEffect} from 'react'5��                                                �                                                �    ;                                          5�_�                    !       ����                                                                                                                                                                                                                                                                                                                                                           `���     �       "   ;      /        <Pane onClick={() => signIn('github')}>5��                          {                     �                         |                    �                         |                    �                          {                     5�_�                    !       ����                                                                                                                                                                                                                                                                                                                          !          !   -       v   -    `���     �       "   ;      /        <Pane onClick={() => signIn('github')}>5��                           |                      5�_�                    "       ����                                                                                                                                                                                                                                                                                                                          !          !   -       v   -    `���     �   !   #   ;      0          <Logo color="white" fontSize="60px" />�   "   #   ;    5��    !                      �                      5�_�                    !       ����                                                                                                                                                                                                                                                                                                                          !          !   -       v   -    `���   	 �       "   ;              <Pane >5��                          {                     5�_�                          ����                                                                                                                                                                                                                                                                                                                          !          !   -       v   -    `��/    �   %                      �   &            �                  (import React, { useEffect } from 'react'�               �             :   5import { Pane, majorScale, Text } from 'evergreen-ui'   %import Logo from '../components/logo'   5import { signIn, useSession } from 'next-auth/client'   'import { useRouter } from 'next/router'   5import SocialButton from '../components/socialButton'       const Signin = () => {   )  const [session, loading] = useSession()     const router = useRouter()       7  // if a user is logged in, never show them this page,     // instead go to app     useEffect(() => {       if (session) {         router.push('/app')       }     }, [session, router])       
  return (   6    <Pane height="100vh" width="100vw" display="flex">         <Pane           height="100%"           width="50%"           borderRight            paddingX={majorScale(8)}            paddingY={majorScale(5)}           background="#47B881"           display="flex"           alignItems="center"           justifyContent="center"         >           <Pane>   P          <Logo onClick={() => signIn('github')}color="white" fontSize="60px" />   *          <Pane marginTop={majorScale(2)}>   0            <Text color="white" fontSize="22px">                 Sign in.               </Text>             </Pane>           </Pane>         </Pane>         <Pane           height="100%"           width="50%"           background="tint2"           display="flex"           alignItems="center"           justifyContent="center"            paddingX={majorScale(7)}         >   .        <Pane width="100%" textAlign="center">   ;          <SocialButton type="github" onClick={() => {}} />           </Pane>         </Pane>       </Pane>     )   }       export default Signin5��           :               )       �              �                (                   (               �                    %                      �      �    %                    �                     5�_�                   8       ����                                                                                                                                                                                                                                                                                                                          @          @   -       v   -    `��     �   7   9   ?      I          <SocialButton type="github" onClick={() => signIn('github')} />5��    7                    �                    5�_�                    8       ����                                                                                                                                                                                                                                                                                                                          @          @   -       v   -    `��%     �   7   9   ?      I          <SocialButton type="google" onClick={() => signIn('github')} />5��    7                    �                    �    7                    �                    �    7                    �                    �    7                    �                    �    7                    �                    5�_�                    8   =    ����                                                                                                                                                                                                                                                                                                                          @          @   -       v   -    `��)    �   7   9   ?      I          <SocialButton type="github" onClick={() => signIn('github')} />5��    7   =                 �                    5�_�                    8   =    ����                                                                                                                                                                                                                                                                                                                          @          @   -       v   -    `��[    �   7   9   ?      I          <SocialButton type="github" onClick={() => signIn('google')} />5��    7   =                 �                    �    7   =                 �                    �    7   =                 �                    �    7   =                 �                    �    7   =                 �                    5�_�                            ����                                                                                                                                                                                                                                                                                                                          @          @   -       v   -    `��    �         @          �         ?    5��                          �                     �                         �                     �                        �                    �                        �                    �                        �                    �                        �                    �                     
   �             
       �                        �                    �                     
   �             
       �                        �                    5�_�      !                      ����                                                                                                                                                                                                                                                                                                                          A          A   -       v   -    `���    �         @      5import { signIn, useSession } from 'next-auth/client'5��                        �                     �              
       
   y       
       
       5�_�       "           !   9   =    ����                                                                                                                                                                                                                                                                                                                          A          A   -       v   -    `���    �   8   :   @      I          <SocialButton type="github" onClick={() => signIn('github')} />5��    8   =                 �                    5�_�   !               "   9   =    ����                                                                                                                                                                                                                                                                                                                          A          A   -       v   -    `��8    �   8   :   @      I          <SocialButton type="github" onClick={() => signIn('google')} />5��    8   =                 �                    �    8   =                 �                    �    8   =                 �                    �    8   =                 �                    �    8   =                 �                    �    8   =                 �                    5�_�                       4    ����                                                                                                                                                                                                                                                                                                                          @          @   -       v   -    `��>    �         ?      .import { signIn, useSession } from 'next-auth'5��       -                 �                     �       +                 �                     �       $                 �                     �       $              	   �              	       5�_�                           ����                                                                                                                                                                                                                                                                                                                                        -       v   -    `��-     �       <       ;   +// import React, { useEffect } from 'react'   8// import { Pane, majorScale, Text } from 'evergreen-ui'   (// import Logo from '../components/logo'   8// import { signIn, useSession } from 'next-auth/client'   *// import { useRouter } from 'next/router'   8// import SocialButton from '../components/socialButton'       // const Signin = () => {   ,//   const [session, loading] = useSession()   //   const router = useRouter()       ://   // if a user is logged in, never show them this page,   //   // instead go to app   //   useEffect(() => {   //     if (session) {   //       router.push('/app')   //     }   //   }, [session, router])       //   return (   9//     <Pane height="100vh" width="100vw" display="flex">   //       <Pane   //         height="100%"   //         width="50%"   //         borderRight   #//         paddingX={majorScale(8)}   #//         paddingY={majorScale(5)}   //         background="#47B881"   //         display="flex"   //         alignItems="center"   "//         justifyContent="center"   
//       >   //         <Pane>   S//           <Logo onClick={() => signIn('github')}color="white" fontSize="60px" />   -//           <Pane marginTop={majorScale(2)}>   3//             <Text color="white" fontSize="22px">   //               Sign in.   //             </Text>   //           </Pane>   //         </Pane>   //       </Pane>   //       <Pane   //         height="100%"   //         width="50%"   //         background="tint2"   //         display="flex"   //         alignItems="center"   "//         justifyContent="center"   #//         paddingX={majorScale(7)}   
//       >   1//         <Pane width="100%" textAlign="center">   >//           <SocialButton type="github" onClick={() => {}} />   //         </Pane>   //       </Pane>   //     </Pane>   //   )   // }       // export default Signin5��            ;       ;                     �      5��