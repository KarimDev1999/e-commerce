import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import * as fs from 'fs';
import * as path from 'path';
import * as uuid from 'uuid';

@Injectable()
export class FileService {
    createFile(file): string {
        try {
            const fileExtenstion = file.originalname.split('.').pop();
            const fileName = uuid.v4() + '.' + fileExtenstion;
            const filePath = path.resolve(__dirname, '..', 'static', 'image')
            if (!fs.existsSync(filePath)) {
                fs.mkdirSync(filePath, { recursive: true })
            }
            fs.writeFileSync(path.resolve(filePath, fileName), file.buffer);
            return 'image' + '/' + fileName
        }
        catch (e) {
            throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}