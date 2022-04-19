import { Injectable } from '@nestjs/common';
import { Storage } from '@google-cloud/storage';
import { FileUpload } from 'graphql-upload';

interface IFile {
    files: FileUpload[];
}

@Injectable()
export class FileService {
    async upload({ files }: IFile) {
        const storage = new Storage({
            keyFilename: 'test-347705-05531ea0d82d.json',
            projectId: 'test-347705',
        }).bucket('example____1');

        //일단 먼저 받기
        const waitedFiles = await Promise.all(files);

        //file 객체 생성
        //await를 붙일 수 있는 부분은 Promise에 한해서 가능하다

        //전송의 순서는 중요하지않다 (for문을 사용하면 안된다)
        // [file,file,file]
        const results = await Promise.all(
            waitedFiles.map((el) => {
                return new Promise((resolve, reject) => {
                    el.createReadStream() //file을 읽는다
                        .pipe(storage.file(el.filename).createWriteStream()) //읽어들인 file을 storage에 업로드
                        .on('finish', () =>
                            resolve(`example____1/${el.filename}`),
                        ) //성공
                        .on('error', () => reject()); //실패
                });
            }),
        );

        return results; // [url,url,url]
    }
}
