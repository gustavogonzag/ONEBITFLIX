import { ResourceWithOptions } from "adminjs";
import { Category } from "../../models/Category";
import { categoryResourceOptions } from "./category";
import { Course } from "../../models/Course";
import { courseResourceFeatures, courseResourceOptions } from "./course";
import { Episode } from "../../models/Episode";
import { episodeResourceFeatures, episodeResourceOptions } from "./episode";

export const adminJsResources: ResourceWithOptions[] = [
    {
        resource: Category,
        options: categoryResourceOptions
    },
    {
        resource: Course,
        options: courseResourceOptions,
        features: courseResourceFeatures
    },
    {
        resource: Episode,
        options: episodeResourceOptions,
        features: episodeResourceFeatures
    }
]