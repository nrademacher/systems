Vim�UnDo� ���G�:%���.'C\K�6�_/=�쪮�?   !   (export async function getStaticProps() {             '       '   '   '    `�<�    _�                     	   ,    ����                                                                                                                                                                                                                                                                                                                                                             `�k�    �      
         /      <NavHeader subHeading="Self Portraits" />5��       ,                  2                     �       -                 3                    �       -                 3                    �       -                 3                    �       -                 3                    �       7                 =                    �       7                 =                    �       <                 B                    �       <                 B                    �       ;                 A                    �       7                 =                    �       7                 =                    �       7                 =                    5�_�                    	   7    ����                                                                                                                                                                                                                                                                                                                                                             `�m�     �      
         C      <NavHeader subHeading="Self Portraits" subColor="gray-900" />5��       7                  =                     5�_�                    	   ;    ����                                                                                                                                                                                                                                                                                                                                                             `�m�    �      
         ?      <NavHeader subHeading="Self Portraits" subColor="-900" />5��       7                 =                    �       7                 =                    �       7                 =                    �       7                 =                    5�_�                    	   -    ����                                                                                                                                                                                                                                                                                                                                                             `�q�    �      
         ?      <NavHeader subHeading="Self Portraits" subColor="self" />5��       -                 3                    �       -                 3                    �       -                 3                    �       -                 3                    �       -                 3                    �       -                 3                    �       -                 3                    �       -                 3                    5�_�                    	   7    ����                                                                                                                                                                                                                                                                                                                                                             `�r�    �      
         ?      <NavHeader subHeading="Self Portraits" tabColor="self" />5��       7                 =                    �       7                 =                    5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `˺�     �                  �               �                  �               5��                          �                     �                          �                     �                         �              :      5�_�      	                    ����                                                                                                                                                                                                                                                                                                                                                             `˺�     �         -          .collection("movies")5��                        I                    �                        I                    �                        I                    5�_�      
           	          ����                                                                                                                                                                                                                                                                                                                                                             `˺�     �                    .limit(1000)5��                                               5�_�   	              
           ����                                                                                                                                                                                                                                                                                                                                                             `˺�     �                 5��                                               5�_�   
                        ����                                                                                                                                                                                                                                                                                                                                                             `˺�     �                    .sort({ metacritic: -1 })5��                          `                     5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `˺�     �                 5��                          `                     5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `˺�     �         )        const movies = await db5��                        %                    �                        %                    �                        %                    �                        %                    5�_�                    #   (    ����                                                                                                                                                                                                                                                                                                                                                             `˺�     �   "   $   )      1      movies: JSON.parse(JSON.stringify(movies)),5��    "   (                 �                    �    "   (                 �                    �    "   (                 �                    �    "   (                 �                    �    "   (                 �                    �    "   (                 �                    5�_�                    #       ����                                                                                                                                                                                                                                                                                                                                                             `˺�     �   "   $   )      1      movies: JSON.parse(JSON.stringify(images)),5��    "                    �                    �    "                    �                    �    "                    �                    �    "                    �                    �    "                    �                    �    "                    �                    5�_�                       &    ����                                                                                                                                                                                                                                                                                                                                                             `˺�     �         )      )export default function SelfPortraits() {5��       &                  �                      �       '                 �                     �       '                 �                     �       '                 �                     �       '                 �                     �       '                 �                     5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `˺�    �   
      )               imgs={GALLERIES[5].imgs}5��    
                    w                    �    
                    w                    �    
                    w                    �    
                    w                    �    
                    w                    �    
                    w                    5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `˻9     �         )      +  const { db } = await connectToDatabase();5��                                            �                                            �                                            �                                            �                                            �                                            �                     	                	       �              	                	              5�_�                       '    ����                                                                                                                                                                                                                                                                                                                                                             `˻C     �         *       �         )    5��                          �                      �                          �                      �                         �                     �                         �                     �                         �                     �                         �                     5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `˻G     �         *      impor {}5��                         �                      5�_�                       	    ����                                                                                                                                                                                                                                                                                                                                                             `˻H     �         *      	import {}5��       	                  �                      �       
                 �                     �       
                 �                     �                        �                     �                        �                     �                        �                     �              
          �       
              �                        �                     �                        �                     �              
          �       
              5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `˻[    �         *      $import {} from '../../utils/mongodb'5��                         �                      �                        �                     �                        �                     5�_�                    &       ����                                                                                                                                                                                                                                                                                                                                                             `˼�    �       !           �      !        �              �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �   
          �   	      
    �      
   	    �      	       �             �             �             �             �             �             �              �              *   import React from 'react';   Fimport ImgSlideShow from '../../components/ImgSlideShow/ImgSlideShow';   =import NavHeader from '../../components/NavHeader/NavHeader';   (import GALLERIES from '../../galleries';   5import {connectToDatabase} from '../../utils/mongodb'       1export default function SelfPortraits({images}) {   
  return (       <>   F      <NavHeader subHeading="Self Portraits" tabColor="border-self" />         <ImgSlideShow           imgs={images}           showNavArrows           showCaptions         />       </>     );   }       (export async function getStaticProps() {       +  const { db } = await connectToDatabase();         const images = await db           .collection("self")           .find({})           .toArray();       
  return {           props: {       1      images: JSON.parse(JSON.stringify(images)),           },         };       }�   %   '   *          },5��    %                     �                     �    %                     �                     �                           �                    5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `˼�     �                 5��                          P                     5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `˼�     �                 5��                          h                     5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `˼�    �                 5��                          v                     5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `�̈́     �                   .collection('self')5��                        a                    �                        a                    �                        a                    �                        a                    �                        a                    �                        a                    5�_�                       	    ����                                                                                                                                                                                                                                                                                                                                                             `�͉     �                   .find({})5��       	                  s                     �       	                  s                     5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `�͔   	 �                   .find({})5��                         u                     �                        u                    �                        u                    �                        }                    �                        }                    �                        �                    �                        �                    �                        �                    �                        �                    5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `��x   
 �                    .find({album: "Test album"})5��              
          }      
              �                        }                    �                        }                    5�_�                     
       ����                                                                                                                                                                                                                                                                                                                                                V       `��T    �   	            F      <NavHeader subHeading="Self Portraits" tabColor="border-self" />5��    	                     Y                     �    	                    ]                    �    	                    ^                    �    	                    ^                    5�_�      !               
   7    ����                                                                                                                                                                                                                                                                                                                                                V       `��f     �   	            Q      <NavHeader id="about" subHeading="Self Portraits" tabColor="border-self" />5��    	   7                  �                     �    	   8                 �                    �    	   8                 �                    �    	   8                 �                    �    	   8                 �                    �    	   B                 �                    �    	   B              
   �             
       �    	   G                 �                    5�_�       "           !   
       ����                                                                                                                                                                                                                                                                                                                                                V       `��o    �   	            f      <NavHeader id="about" subHeading="Self Portraits" subColor="text-self" tabColor="border-self" />5��    	                    ^                    �    	                    ^                    �    	                    ^                    �    	                    ^                    5�_�   !   #           "      "    ����                                                                                                                                                                                                                                                                                                                                                V       `���    �   
            ?      <ImgSlideShow imgs={images} showNavArrows showCaptions />5��    
   "                  �                     5�_�   "   $           #           ����                                                                                                                                                                                                                                                                                                                                                V       `όM    �                (import GALLERIES from '../../galleries';5��                          �       )               5�_�   #   &           $           ����                                                                                                                                                                                                                                                                                                                                                V       `ϒ�     �                  import React from 'react';   Fimport ImgSlideShow from '../../components/ImgSlideShow/ImgSlideShow';   =import NavHeader from '../../components/NavHeader/NavHeader';   8import { connectToDatabase } from '../../utils/mongodb';       3export default function SelfPortraits({ images }) {   
  return (       <>   e      <NavHeader id="self" subHeading="Self Portraits" subColor="text-self" tabColor="border-self" />   1      <ImgSlideShow imgs={images} showCaptions />       </>     );   }       (export async function getStaticProps() {   +  const { db } = await connectToDatabase();         const images = await db       .collection('images')       .find({album: "self"})       .toArray();       
  return {       props: {   1      images: JSON.parse(JSON.stringify(images)),       },     };   }5�5�_�   $   '   %       &          ����                                                                                                                                                                                                                                                                                                                                                             `�<�    �               (export async function getStaticProps() {5��                        �                    �                        �                    �                        �                    �                        �                    5�_�   &               '      '    ����                                                                                                                                                                                                                                                                                                                                                             `�<�    �                  import React from 'react';   Fimport ImgSlideShow from '../../components/ImgSlideShow/ImgSlideShow';   =import NavHeader from '../../components/NavHeader/NavHeader';   8import { connectToDatabase } from '../../utils/mongodb';       3export default function SelfPortraits({ images }) {   
  return (       <>   e      <NavHeader id="self" subHeading="Self Portraits" subColor="text-self" tabColor="border-self" />   1      <ImgSlideShow imgs={images} showCaptions />       </>     );   }       ,export async function getServerSideProps() {   +  const { db } = await connectToDatabase();         const images = await db       .collection('images')       .find({album: "self"})       .toArray();       
  return {       props: {   1      images: JSON.parse(JSON.stringify(images)),       },     };   }5��                   !               �            5�_�   $           &   %           ����                                                                                                                                                                                                                                                                                                                                                             `�<�     �               iw5��               (          �      (              5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `˺�     �         -        e5��                         <                     �                         8                    5��