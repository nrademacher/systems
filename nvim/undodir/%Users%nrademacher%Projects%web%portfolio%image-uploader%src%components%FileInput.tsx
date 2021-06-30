Vim�UnDo�  �I�0��	o�
P�𓦥�+
b9�z_�a�	   G   8  const onDrop = useCallback<DropzoneOptions['onDrop']>(      7                       `��    _�                             ����                                                                                                                                                                                                                                                                                                                                                             `�@    �   A                                   �   B            �   &                �   '            �                   �               5��                    &                      �      �    &                    �              �      �    A                     �                    5�_�                    O        ����                                                                                                                                                                                                                                                                                                                                                             `�E    �   N   O           �   M   O   N    �   L   N   M    �   K   M   L    �   J   L   K    �   I   K   J    �   H   J   I    �   G   I   H    �   F   H   G    �   E   G   F    �   D   F   E    �   C   E   D    �   B   D   C    �   A   C   B    �   @   B   A    �   ?   A   @    �   >   @   ?    �   =   ?   >    �   <   >   =    �   ;   =   <    �   :   <   ;    �   9   ;   :    �   8   :   9    �   7   9   8    �   6   8   7    �   5   7   6    �   4   6   5    �   3   5   4    �   2   4   3    �   1   3   2    �   0   2   1    �   /   1   0    �   .   0   /    �   -   /   .    �   ,   .   -    �   +   -   ,    �   *   ,   +    �   )   +   *    �   (   *   )    �   '   )   (    �   &   (   '    �   %   '   &    �   $   &   %    �   #   %   $    �   "   $   #    �   !   #   "    �       "   !    �      !        �              �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �   
          �   	      
    �      
   	    �      	       �             �             �             �             �             �             �              �              Q   *// components/FormComponents/FileInput.tsx   9import React, { FC, useCallback, useEffect } from 'react'   =import { DropzoneOptions, useDropzone } from 'react-dropzone'   0import { useFormContext } from 'react-hook-form'       interface IFileInputProps   b  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {     label?: string   }       3const FileInput: FC<IFileInputProps> = (props) => {   &  const { name, label = name } = props   	  const {       register,       unregister,       setValue,   
    watch,     } = useFormContext()   #  const files: File[] = watch(name)   8  const onDrop = useCallback<DropzoneOptions['onDrop']>(       (droppedFiles) => {   <      setValue(name, droppedFiles, { shouldValidate: true })       },       [setValue, name],     )   E  const { getRootProps, getInputProps, isDragActive } = useDropzone({       onDrop,       accept: props.accept,     })     useEffect(() => {       register(name)       return () => {         unregister(name)       }   "  }, [register, unregister, name])   
  return (       <>         <label   I        className='block text-gray-700 text-sm font-bold mb-2 capitalize'           htmlFor={name}         >           {label}         </label>         <div {...getRootProps()}>           <input             {...props}   �          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'             id={name}             {...getInputProps()}   
        />           <div             className={   @            'w-full p-2 border border-dashed border-gray-900 ' +   :            (isDragActive ? 'bg-gray-400' : 'bg-gray-200')             }   	        >   E          <p className='text-center my-2'>Drop the files here ...</p>   E          {/* Optionally you may display a preview of the file(s) */}             {!!files?.length && (   9            <div className='grid gap-1 grid-cols-4 mt-2'>   $              {files.map((file) => {                   return (   '                  <div key={file.name}>                       <img   5                      src={URL.createObjectURL(file)}   %                      alt={file.name}   A                      style={{ width: '100px', height: '100px' }}                       />                     </div>                   )                 })}               </div>             )}           </div>         </div>       </>     )   }       export default FileInput    �   N   P   Q       5��    N                      �                     �    N                      �                     �            Q                       	              �                                           +       �                          +               ;       �                          f               ?       �                          �               2       �                          �                      �                          �                      �                          �               #       �                                        1       �                          F                     �    	                      [                     �    
                      a                     �                          s                     �                          u                     �                          v              4       �                          �              (       �                          �              F       �                                        %       �                          =              9       �                          v                     �                          �              >       �                          �                     �                          �                     �                          �                     �                          �              F       �                          3                     �                          ?                     �                          Y                     �                          _                     �                          s                     �                          �                     �                          �                     �                          �                     �                           �              $       �    !                      �                     �    "                      �                     �    #                      �                     �    $                      �              J       �    %                      F                     �    &                      ]                     �    '                      e                     �    (                      u                     �    )                      �                      �    *                      �                     �    +                      �                     �    ,                      �              �       �    -                      Y                     �    .                      m                     �    /                      �                     �    0                      �                     �    1                      �                     �    2                      �              A       �    3                      �              ;       �    4                      6                     �    5                      B              
       �    6                      L              F       �    7                      �              F       �    8                      �                      �    9                      �              :       �    :                      2              %       �    ;                      W                     �    <                      p              (       �    =                      �                     �    >                      �              6       �    ?                      �              &       �    @                                    B       �    A                      O                     �    B                      f                     �    C                                           �    D                      �                     �    E                      �                     �    F                      �                     �    G                      �                     �    H                      �                     �    I                      �                     �    J                      �                     �    K                      �                     �    L                      �                     �    M                      �                     �    N                      	                     5�_�                            ����                                                                                                                                                                                                                                                                                                                                                V   &    `��     �                interface IFileInputProps   "  extends React.DetailedHTMLProps<   0    React.InputHTMLAttributes<HTMLInputElement>,       HTMLInputElement     > {     label?: string;   }5��                          �       �               5�_�                       $    ����                                                                                                                                                                                                                                                                                                                                                V   &    `��     �         G      3const FileInput: FC<IFileInputProps> = (props) => {5��       #                  �                      �       "                  �                      �       !                  �                      �                          �                      �                         �                      �                         �                      �                         �                      �                         �                      �                         �                      �                         �                      �                         �                      �                         �                      �                         �                      �                         �                      �                         �                      �                         �                      �                         �                      �                         �                      �                         �                      �                         �                      �                         �                      5�_�                    
       ����                                                                                                                                                                                                                                                                                                                                                V   &    `��     �   	      G      $  const files: File[] = watch(name);5��    	                     s                     5�_�                        7    ����                                                                                                                                                                                                                                                                                                                                                V   &    `��    �   
      G      8  const onDrop = useCallback<DropzoneOptions['onDrop']>(5��    
   6                  �                     �    
   5                  �                     �    
   4                  �                     �    
   3                  �                     �    
   2                  �                     �    
   1                  �                     �    
   0                  �                     �    
   /                  �                     �    
   .                  �                     �    
   -                  �                     �    
   ,                  �                     �    
   +                  �                     �    
   *                  �                     �    
   )                  �                     �    
   (                  �                     �    
   '                  �                     �    
   &                  �                     �    
   %                  �                     �    
   $                  �                     �    
   #                  �                     �    
   "                  �                     �    
   !                  �                     �    
                      �                     �    
                     �                     �    
                     �                     �    
                     �                     �    
                     �                     5��