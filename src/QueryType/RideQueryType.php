<?php

namespace App\QueryType;

use Ibexa\Contracts\Core\Repository\Values\Content\LocationQuery;
use Ibexa\Contracts\Core\Repository\Values\Content\Query\Criterion;
use Ibexa\Core\QueryType\QueryType;

class RideQueryType implements QueryType
{
    public static function getName()
    {
        return 'Ride';
    }

    public function getQuery(array $parameters = [])
    {
        return new LocationQuery([
            'filter' => new Criterion\LogicalAnd(
                [
                    new Criterion\Visibility(Criterion\Visibility::VISIBLE),
                    new Criterion\ContentTypeIdentifier(['ride']),
                ]
            )
        ]);
    }

    public function getSupportedParameters()
    {
    }
}
