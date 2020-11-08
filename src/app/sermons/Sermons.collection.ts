import { Sermon } from './Sermon.model';

export class SermonCollection{
    public static sermons:Sermon[] = [
        new Sermon(3569214649852340, 'At the table','<small>Part 2 - </small>By Rev Ryan Oswald','8 November, 2020'),
        new Sermon(3273967092712389, 'At the table','<small>Part 1 - </small>By Rev Ryan Oswald','1 November, 2020'),

        new Sermon(739302473594754, 'The Sting','<small>Part 4 - </small>By Rev Ryan Oswald','25 October, 2020'),
        new Sermon(2793645324293224, 'The Sting','<small>Part 3 - </small>By Rev Ryan Oswald','18 October, 2020'),
        new Sermon(726944777890410, 'The Sting','<small>Part 2 - </small>By Rev Ryan Oswald','11 October, 2020'),
        new Sermon(618270539056957, 'The Sting','<small>Part 1 - </small>By Rev Ryan Oswald','4 October, 2020'),

        new Sermon(956417531501623, 'I Love Jesus (but I hate...)','<small>Part 3 - </small>By David Meyer','20 September, 2020'),
        new Sermon(3273258736055108, 'I Love Jesus (but I hate...)','<small>Part 2 - </small>By David Meyer','13 September, 2020'),
        new Sermon(3273258736055108, 'I Love Jesus (but I hate...)','<small>Part 2 - </small>By David Meyer','7 September, 2020'),

    ];
}